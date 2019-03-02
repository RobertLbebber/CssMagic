import React, { Component } from "react";
import _ from "lodash";
import jsxToString from "jsx-to-string";
import { hot } from "react-hot-loader";
import PropTypes from "prop-types";
import { Badge, Card, Button, Tab, Tabs, ListGroup, Jumbotron } from "react-bootstrap";
import { Playground } from "../Sections/Playground";
import Editor from "../Sections/Editor";
//import func from '/frontend/src/util/func/func'

export class FullView extends Component {
  constructor(props) {
    super(props);
    //var id=func.generateSerial(9,36);
    this.state = {
      //_id: id
    };
    this._tag = this.constructor.name;
    this._isMount = false;
  }

  componentDidMount() {
    this._isMount = true;
  }

  componentWillUnmount() {
    this._isMount = false;
  }

  render() {
    let Component = this.props.component;
    console.log(Component);
    let componentName = Component.name;

    return (
      <div className={this._tag}>
        {this.state._tag}
        <Card
          id="qwdsacefcd"
          key={componentName}
          onClick={() => {
            this.props.history.push("/" + componentName);
          }}
        >
          <Card.Body id={"asdasdas"}>
            <Card.Title className="text-center">{componentName}</Card.Title>
            <Component loop="infinite" duration={3}>
              <Button className="w-100" size="lg" title={componentName}>
                <Badge>{componentName}</Badge>
              </Button>
            </Component>
            <code>{jsxToString(<Component />)}</code>
            <Editor component={Component} />
          </Card.Body>
        </Card>
      </div>
    );
  }

  static propTypes = {
    component: PropTypes.any.isRequired
  };

  static defaultProps = {};
}
export default FullView;
