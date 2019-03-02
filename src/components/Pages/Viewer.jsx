import React, { Component } from "react";
import _ from "lodash";
import jsxToString from "jsx-to-string";
import PropTypes from "prop-types";
import { Badge, Card, Button, Tab, Tabs, ListGroup, Jumbotron } from "react-bootstrap";
//import func from '/frontend/src/util/func/func'

export class Viewer extends Component {
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
    return (
      <div className={this._tag}>
        {this.state._tag}
        {_.map(this.props.components, (Component, componentName) => {
          console.log(componentName);
          return (
            <Card
              key={componentName}
              onClick={() => {
                this.props.history.push("/" + componentName);
              }}
            >
              <Card.Body>
                <Card.Title className="text-center">{componentName}</Card.Title>
                <Component loop="infinite" duration={3}>
                  <Button className="w-100" size="lg" title={componentName}>
                    <Badge>{componentName}</Badge>
                  </Button>
                </Component>
                <code>{jsxToString(<Component />)}</code>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }

  static propTypes = {
    components: PropTypes.object.isRequired
  };

  static defaultProps = {};
}
export default Viewer;
