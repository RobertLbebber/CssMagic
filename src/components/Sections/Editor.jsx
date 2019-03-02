import { Provider, Editor as JsxEditor, Preview } from "@matthamlin/react-preview-editor";
import { transform } from "@babel/standalone";
import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
// import { expect } from "chai";
import reactElementToJSXString from "react-element-to-jsx-string";
import _ from "lodash";
import PropTypes from "prop-types";
//import func from '/frontend/src/util/func/func'

class Editor extends Component {
  constructor(props) {
    super(props);
    // Adapter;
    Enzyme.configure({ adapter: new Adapter() });
    this.state = {};
    this._tag = this.constructor.name;
    this._mounted = false;
  }
  transformCode(code) {
    return transform(code, { presets: [["stage-0", { decoratorsLegacy: true }], "react"] }).code;
  }

  render() {
    // console.log(this.props.component, this.props.component.name);
    // let Component = new this.props.component();
    // console.log("This is Component: ", Component);
    const component = shallow(<h1>asd</h1>);
    // console.log("This is Component: ", component.single(reactElementToJSXString));

    return "hi";
    // <Provider
    //   code={
    //     this.props.component +
    //     " render(<" +
    //     this.props.component.name +
    //     "><i>asdsadasdasd</i></" +
    //     this.props.component.name +
    //     ">);"
    //     //           `function App() {
    //     //   const [count, setCount] = useState(0);
    //     //   return (
    //     //     <button onClick={() => setCount(count + 1)}>Update count: {count}</button>
    //     //   );
    //     // }

    //     // render(<App />);`
    //   }
    //   transformCode={this.transformCode}
    // >
    //   <Preview />
    //   <JsxEditor />
    // </Provider>
  }
  static propTypes = {
    component: PropTypes.any
  };

  static defaultProps = {};
}
export default Editor;
