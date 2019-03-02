import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import * as CssMagic from "../CssMagic";
import "./Index.css";
import { Badge, Card, Button, Tab, Tabs, ListGroup } from "react-bootstrap";

export class Index extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
        <Tabs defaultActiveKey="Attention" id="uncontrolled-tab-example">
          {_.map(CssMagic, (library, libraryName) => {
            let categoryLibrary = new library();
            return (
              <Tab eventKey={libraryName} title={libraryName} key={libraryName}>
                {_.map(categoryLibrary, (variantLibrary, variantLibraryName) => {
                  let variants = new variantLibrary();
                  return (
                    <Card
                      key={variantLibraryName}
                      onClick={e => {
                        this.props.history.push("/" + variantLibraryName);
                      }}
                    >
                      <Card.Body>
                        <Card.Title className="text-center">{_.startCase(variantLibraryName)}</Card.Title>
                        <ListGroup variant="flush">
                          {_.map(variants, (Variant, variantName) => (
                            <ListGroup.Item key={Variant}>
                              <div className="w-100" style={{ overflow: "hidden" }}>
                                <Button className="w-100" size="lg" title={variantName}>
                                  <Variant loop="infinite" duration={3}>
                                    <Badge>{variantName}</Badge>
                                  </Variant>
                                </Button>
                              </div>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Tab>
            );
          })}
        </Tabs>
      </div>
    );
  }
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.any,
    location: PropTypes.any,
    staticContext: PropTypes.any
  };

  static defaultProps = {};
}
export default Index;
