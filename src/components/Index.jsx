import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import * as CssMagic from "./CssMagic";
import { Badge, Card, Button, Tab, Tabs, ListGroup } from "react-bootstrap";
//import func from '/frontend/src/util/func/func'

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
    console.log(CssMagic.Attention.toString());
    return (
      <div>
        <Tabs defaultActiveKey="Attention" id="uncontrolled-tab-example">
          {_.map(CssMagic, (library, libraryName) => {
            let categoryLibrary = new library();
            return (
              <Tab eventKey={libraryName} title={libraryName} key={libraryName}>
                {_.map(categoryLibrary, (variantLibrary, variantLibraryName) => {
                  let variants = new variantLibrary();
                  return (
                    <Card style={{ width: "18rem", float: "left" }}>
                      <Card.Body>
                        {/* <Button variant={}> */}
                        <Card.Title>{variantLibraryName}</Card.Title>
                        {/* </Button> */}
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
}
export default Index;
