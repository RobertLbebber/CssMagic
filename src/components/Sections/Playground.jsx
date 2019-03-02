import { Sandbox, withDependencies } from "react-sandbox-editor";
import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
//import func from '/frontend/src/util/func/func'

export class Playground extends Component {
  constructor(props) {
    super(props);
    //var id=func.generateSerial(9,36);
    this.state = {
      //_id: id
    };
    this._tag = this.constructor.name;
    this._isMount = false;
    this.ReactSandbox = withDependencies([
      "https://unpkg.com/react@16.6.0/umd/react.development.js",
      "https://unpkg.com/react-dom@16.6.0/umd/react-dom.development.js"
    ])(Sandbox);
  }

  componentDidMount() {
    this._isMount = true;
  }

  componentWillUnmount() {
    this._isMount = false;
  }

  render() {
    return (
      <div className={this._tag}>
        <this.ReactSandbox
          classes={{
            header: undefined
          }}
          displayMode="horizontal-split"
          executeOnCodeChange
          executeOnCodeChangeDebounce={1000}
          horizontalSplitOffset={56}
          onDisplayModeButtonClick={function() {}}
          permissions={[
            "allow-forms",
            "allow-pointer-lock",
            "allow-popups",
            "allow-modals",
            "allow-same-origin",
            "allow-scripts",
            "allow-top-navigation"
          ]}
          scriptEditor={{
            defaultValue:
              "import " +
              this.props.component +
              " from '../generated/';\nReactDOM.render(\n  " +
              this.props.component +
              ",\n  document.getElementById('__fake_root')\n);",
            mode: "jsx"
          }}
          templateEditor={{
            defaultValue: '<div id="__fake_root"></div>',
            mode: "html",
            readOnly: false,
            wrapLines: false
          }}
          theme="solarized_dark"
        />
      </div>
    );
  }

  static propTypes = {
    component: PropTypes.any
  };

  static defaultProps = {};
}
export default Playground;
