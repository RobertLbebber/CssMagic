"use strict";
import fs from "graceful-fs";
import _ from "lodash";

/**
 * _______________________
 * |                     |
 * |                     |
 * |     SECTION ONE     |
 * |                     |
 * |_____________________|
 * |                     |
 * |                     |
 * |     RUN OPTIONS     |
 * |                     |
 * |_____________________|
 */
/**
 * _______________________
 * |                     |
 * |                     |
 * |     SECTION TWO     |
 * |                     |
 * |_____________________|
 * |                     |
 * |                     |
 * |      CONSTANTS      |
 * |                     |
 * |_____________________|
 */
const defColor = "\x1b[37m";
const warColor = "\x1b[33m";
const staColor = "\x1b[94m";
const log = (color, message) => {
  console.log(color + message + defColor);
};
const showFileCreation = false;
const showFolderCreation = false;
const generatedDir = "./src/components/generated";
/**
 * _______________________
 * |                     |
 * |                     |
 * |    SECTION THREE    |
 * |                     |
 * |_____________________|
 * |                     |
 * |                     |
 * |      FUNCTIONS      |
 * |                     |
 * |_____________________|
 */
async function mkDir(path) {
  if (!fs.existsSync(path)) {
    await fs.mkdir(path, err => {
      if (err) throw err;
      if (showFolderCreation) {
        console.log("The Folder has been created: " + path);
      }
    });
  }
}

async function mkFile(path, content) {
  await fs.writeFile(path, content, "utf8", async (err, data) => {
    if (err) throw err;
    if (showFileCreation) {
      console.log("File supposedly Created: " + path);
    }
  });
}

async function ensureDirIsValid() {
  await mkDir("./src");
  await mkDir("./src/components/");
  await mkDir(generatedDir);
}

async function generateClasses(categories) {
  await ensureDirIsValid();

  await _.map(categories, async category => {
    let resolve;
    let listOfVariantions = [];
    await mkDir(generatedDir + "/" + category.name);
    resolve = _.map(category.groups, async (group, i) => {
      let groupName;
      let resolveDeep = _.map(group, async variations => {
        let listOfVariation = [];
        //Make Directory For Groups (aka Variant Type)
        await mkDir(generatedDir + "/" + category.name + "/" + variations.name);
        //Get Variant's paths
        let resolveDeepest = _.map(variations.group, async variation => {
          listOfVariation.push({
            name: variation.name,
            path: variations.name + "/" + variation.name
          });
          //Create Finished File
          await mkFile(
            generatedDir + "/" + category.name + "/" + variations.name + "/" + variation.name + ".jsx",
            variation.class
          );
        });
        await Promise.all(resolveDeepest);

        //Generate this Variants Library
        let variantLibrary = libraryTemplate;
        _.map(listOfVariation, variation => {
          variantLibrary = variantLibrary.replace(
            /\$1/g,
            "import " + variation.name + " from './" + variation.path + ".jsx';$1"
          );
          variantLibrary = variantLibrary.replace(/\$2/g, variation.name + ",$2");
          variantLibrary = variantLibrary.replace(/\$3/g, variation.name + "=" + variation.name + "; $3");
        });
        variantLibrary = variantLibrary.replace(/\$1/g, "");
        variantLibrary = variantLibrary.replace(/\$2/g, "");
        variantLibrary = variantLibrary.replace(/\$3/g, "");
        await mkFile(generatedDir + "/" + category.name + "/" + variations.name + ".jsx", variantLibrary);

        //Generate a List of Variants Libraries For a Category Library
        listOfVariantions.push({
          name: variations.name,
          path: variations.path
        });
      });
      await Promise.all(resolveDeep);
    });
    await Promise.all(resolve);

    let variantsLibrary = libraryTemplate;
    _.map(listOfVariantions, variantions => {
      variantsLibrary = variantsLibrary.replace(
        /\$1/g,
        "import " + variantions.name + " from './" + category.name + "/" + variantions.name + "';$1"
      );
      variantsLibrary = variantsLibrary.replace(/\$2/g, variantions.name + ",$2");
      variantsLibrary = variantsLibrary.replace(/\$3/g, variantions.name + "=" + variantions.name + "; $3");
    });
    variantsLibrary = variantsLibrary.replace(/\$1/g, "");
    variantsLibrary = variantsLibrary.replace(/\$2/g, "");
    variantsLibrary = variantsLibrary.replace(/\$3/g, "");
    await mkFile(generatedDir + "/" + category.name + ".jsx", variantsLibrary);
  });
}

function generateLibraryList(classJson) {
  //This is dedicated to creating a Library component
  log(warColor, "-- Library Component Class must be default named and identical to its file name");
  let categories = [];
  for (let category in classJson.categories) {
    let groupings = [];
    categories.push({
      name: _.upperFirst(_.camelCase(category)),
      groups: _.map(classJson.categories[category], groups => {
        for (let variations in groups) {
          let variatants = [];
          for (let componentsKey in groups[variations]) {
            for (let componentKey in groups[variations][componentsKey]) {
              let component = groups[variations][componentsKey][componentKey];
              let animationName = componentKey;
              let componentName = _.upperFirst(_.camelCase(animationName));
              let jsx = _.clone(template);
              jsx = jsx.replace(/\$1/g, componentName);
              jsx = jsx.replace(/\$2/g, animationName);
              jsx = jsx.replace(/\$4/g, component.delay);
              jsx = jsx.replace(/\$5/g, component.duration);
              jsx = jsx.replace(/\$6/g, component.iterationCount);
              jsx = jsx.replace(/\$7/g, component.direction);
              jsx = jsx.replace(/\$8/g, component.easing);
              variatants.push({
                class: jsx,
                name: componentName,
                group: Object.keys(groups)[0]
              });
            }
          }
          groupings.push({
            group: variatants,
            name: _.upperFirst(_.camelCase(variations))
          });
        }
        return groupings;
      })
    });
  }
  generateClasses(categories);
}

/**
 * _______________________
 * |                     |
 * |                     |
 * |    SECTION  FOUR    |
 * |                     |
 * |_____________________|
 * |                     |
 * |                     |
 * |      EXECUTION      |
 * |                     |
 * |_____________________|
 */
export default function execution() {
  log(staColor, "Creating Css Magic Library");
  fs.readFile("./CssMagic.json", "utf8", async (err, data) => {
    generateLibraryList(JSON.parse(data));
  });
}

execution();
/**
 * _______________________
 * |                     |
 * |                     |
 * |     SECTION  FIVE	 |
 * |                     |
 * |_____________________|
 * |                     |
 * |                     |
 * |      TEMPLATES      |
 * |                     |
 * |_____________________|
 */

const template = `
//This file was generated by CssMagicMaker
import React from "react";
import PropTypes from "prop-types";
/**
	TODO JSDocs
*/
class $1 extends React.Component {
	constructor(props){
		super(props);
		this.state={};
	}
	
	render(){
		const {className,delay,duration,loop,direction}=this.props;
		return(
			<div className={"$1 "+className}style={{animation:"$2 "+duration+"s "+delay+"s "+loop+" "+direction}}>
				{this.props.children}
			</div>
		);
	}
	
}
$1.propTypes = {
	className:PropTypes.string,
	delay:PropTypes.number,
	duration:PropTypes.number,
	loop:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	direction:PropTypes.oneOf(["normal","reverse"]),
	easing:PropTypes.string
}
	
$1.defaultProps = {
	className:"",
	delay:$4,
	duration:$5,
	loop:"$6",
	direction:"$7",
	easing:"$8"
}
export default $1;
`;

const libraryTemplate = `
//This file was generated by CssMagicMaker
// import React from "react";
// import PropTypes from "prop-types";
$1
export{
  $2
}
export default class {
  $3
}
`;
