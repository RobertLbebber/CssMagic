import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import "./Index.css";
import { Badge, Card, Button, Tab, Tabs, ListGroup } from "react-bootstrap";

export class Index extends Component {
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
        <Tabs defaultActiveKey={Object.keys(this.props.components)[0]} id="uncontrolled-tab-example">
          {_.map(this.props.components, (library, libraryName) => {
            let categoryLibrary = new library();
            return (
              <Tab
                eventKey={libraryName}
                title={libraryName}
                key={libraryName}
                onClick={() => {
                  this.props.history.push("/" + libraryName);
                }}
              >
                {_.map(categoryLibrary, (Variant, variantName) => (
                  <Card key={variantName}>
                    <Card.Title className="text-center">{_.startCase(variantName)}</Card.Title>
                    <Card.Body>
                      <div className="w-100" style={{ overflow: "hidden" }} key={Variant}>
                        <Button className="w-100" size="lg" title={variantName}>
                          <Variant loop="infinite" duration={3}>
                            <Badge variant="secondary">{variantName}</Badge>
                          </Variant>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </Tab>
            );
          })}
        </Tabs>
      </div>
    );
  }
  static propTypes = {
    // history: PropTypes.array,
    // match: PropTypes.any,
    // location: PropTypes.any,
    // staticContext: PropTypes.any,
    components: PropTypes.object
  };

  static defaultProps = {};
}
export default Index;
