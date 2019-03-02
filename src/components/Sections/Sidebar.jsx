import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import _ from "lodash";
import "./Sidebar.css";
import { Nav, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
//import func from '/frontend/src/util/func/func'

export class Sidebar extends Component {
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
        <Nav defaultActiveKey="/" className="flex-column">
          <ListGroup>
            <ListGroup.Item
              className="text-center bg-dark"
              onClick={() => {
                this.props.redirect("/");
              }}
            >
              <h2 className="text-white">Css Magic</h2>
            </ListGroup.Item>
            {_.map(this.props.routes, route => (
              <ListGroup.Item key={route.name}>
                <Nav.Link href={route.path}>{route.name}</Nav.Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Nav>
      </div>
    );
  }

  static propTypes = {
    history: PropTypes.array,
    match: PropTypes.any,
    location: PropTypes.any,
    staticContext: PropTypes.any,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string
      })
    ),
    redirect: PropTypes.func
  };

  static defaultProps = {};
}
export default Sidebar;
