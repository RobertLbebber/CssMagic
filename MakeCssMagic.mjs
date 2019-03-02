"use strict";
import fs from "graceful-fs";
import _ from "lodash";

/**
 * _______________________
 * |                     |
 * |                     |
 * |    SECTION ZERO     |
 * |                     |
 * |_____________________|
 * |                     |
 * |                     |
 * |     RUN OPTIONS     |
 * |                     |
 * |_____________________|
 */
//LOLZ
/**
 * TODO
 */

/**
 * _______________________
 * |                     |
 * |                     |
 * |     SECTION ONE     |
 * |                     |
 * |_____________________|
 * |                     |
 * |                     |
 * |      CONFIGURE      |
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

async function generateClasses(categories) {
  _.map(categories, async category => {
    if (!fs.existsSync("./src/components/generated/" + category.name)) {
      await fs.mkdir("./src/components/generated/" + category.name, err => {
        if (err) throw err;
        console.log("The Folder has been created: " + category.name);
      });
    }
    let listOfVariatants = [];
    await _.map(category.groups, group => {
      _.map(group, async variations => {
        if (
          !fs.existsSync(
            "./src/components/generated/" +
              category.name +
              "/" +
              variations.name
          )
        ) {
          await fs.mkdir(
            "./src/components/generated/" +
              category.name +
              "/" +
              variations.name,
            err => {
              if (err) throw err;
              console.log(
                "The Folder has been created: " +
                  "./src/components/generated/" +
                  category.name +
                  "/" +
                  variations.name
              );
            }
          );
        }
        await _.map(variations.group, async variation => {
          let pathsOfVariant =
            category.name +
            "/" +
            variations.name +
            "/" +
            variation.name +
            ".jsx";
          listOfVariatants.push({ name: variation.name, path: pathsOfVariant });
          await fs.writeFile(
            "./src/components/generated/" + pathsOfVariant,
            variation.class,
            "utf8",
            async (err, data) => {
              if (err) throw err;
              console.log("File supposedly Created: " + pathsOfVariant);
            }
          );
        });
      });
    });

    let variantLibrary = libraryTemplate;
    // console.log(listOfVariatants);
    _.map(listOfVariatants, variation => {
      console.log(variation);
      variantLibrary = variantLibrary.replace(
        /\$1/g,
        "import " + variation.name + " from './" + variation.path + "';$1"
      );
      variantLibrary = variantLibrary.replace(/\$2/g, variation.name + ",$2");
      variantLibrary = variantLibrary.replace(
        /\$3/g,
        variation.name + "=" + variation.name + "; $3"
      );
    });
    variantLibrary = variantLibrary.replace(/\$1/g, "");
    variantLibrary = variantLibrary.replace(/\$2/g, "");
    variantLibrary = variantLibrary.replace(/\$3/g, "");
    await fs.writeFile(
      "./src/components/generated/" + category.name + ".jsx",
      variantLibrary,
      err => {
        if (err) throw err;
        console.log(
          "The file has been saved!" +
            "./src/components/generated/" +
            category.name +
            ".jsx"
        );
      }
    );
  });
}

function generateLibraryList(classJson) {
  //This is dedicated to creating a Library component
  log(
    warColor,
    "-- Library Component Class must be default named and identical to its file name"
  );
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
			<div className={"$1"+" "+className}style={{animation:"$2 "+duration+"s "+delay+"s "+loop+" "+direction}}>
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
import React from "react";
import PropTypes from "prop-types";
$1
export{
  $2
}
export default class {
  $3
}
`;
