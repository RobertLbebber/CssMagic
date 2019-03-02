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
    let MagicWand;
    //  = new CssMagic.Attention();
    return (
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          {_.map(CssMagic, (library, libraryName) => {
            MagicWand = new library();
            return (
              <Tab eventKey={libraryName} title={libraryName} key={libraryName}>
                <Card style={{ width: "18rem" }}>
                  <ListGroup variant="flush">
                    {_.map(MagicWand, (Component, name) => {
                      return (
                        <ListGroup.Item key={name}>
                          <div className="w-100" style={{ overflow: "hidden" }}>
                            <Button className="w-100" size="lg" title={name}>
                              <Component loop="infinite" duration={3}>
                                <Badge>{name}</Badge>
                              </Component>
                            </Button>
                          </div>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    );
  }
  // <div className={this._tag}>
  //   {this._tag}
  //   <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  //     {_.map(CssMagic, (library, libraryName) => {
  //       console.log(library, j);
  //       let classLibrary = new library();
  //       return (
  //         <Tab eventKey={libraryName} title={libraryName} key={libraryName}>
  //           (
  //           {/* {_.map(classLibrary, (component, I, j) => {
  //             let ClassComponent = new component();
  //             console.log(
  //               "ComponentLevel",
  //               ClassComponent,
  //               "i=",
  //               I,
  //               typeof I,
  //               "j=",
  //               j
  //             );
  //             return <library.component key={I} />; */}
  //             // <ClassComponent key={i} className={i} />;
  //           })}
  //           )
  //         </Tab>
  //       );
  //     })}
  //   </Tabs>

  //   {
  //     // <something.BounceRight loop="infinite">
  //     //   <Button>
  //     //     <Badge>HI</Badge>
  //     //   </Button>
  //     // </something.BounceRight>
  //   }
  // </div>
  // );

  // static propTypes = {};

  // static defaultProps = {};
}
export default Index;
