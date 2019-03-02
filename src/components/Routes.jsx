import React, { Component } from "react";
import _ from "lodash";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import "./Routes.css";
import * as CssMagic from "./CssMagic.jsx";
import Index from "./Pages/Index.jsx";
import Viewer from "./Pages/Viewer.jsx";
import FullView from "./Pages/FullView.jsx";
import SelectView from "./Pages/SelectView.jsx";
import Sidebar from "./Sections/Sidebar.jsx";

export class Routes extends Component {
  constructor(props) {
    super(props);
    let routes = [];
    let mainRoutes = [];
    let minorRoutes = [];
    _.map(CssMagic, (library, libraryName) => {
      let categoryLibrary = new library();
      mainRoutes.push({ name: libraryName, components: categoryLibrary, path: "/" + libraryName });
      _.map(categoryLibrary, (variantLibrary, variantLibraryName) => {
        let variants = new variantLibrary();
        routes.push({ name: variantLibraryName, components: variants, path: "/" + variantLibraryName });
        _.map(variants, (Variant, variantName) => {
          minorRoutes.push({ name: variantName, component: Variant, path: "/" + variantName });
        });
      });
    });
    this.state = {
      _tag: this.constructor.name,
      routes: routes,
      mainRoutes: mainRoutes,
      minorRoutes: minorRoutes,
      redirect: null
    };
    this._isMount = false;
  }

  componentDidMount() {
    this._isMount = true;
  }

  componentWillUnmount() {
    this._isMount = false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.redirect);
    if (prevState.redirect !== this.state.redirect) {
      this.setState({
        redirect: null,
        newLocation: this.state.redirect
      });
    }
  }

  render() {
    return (
      <div className={this.state._tag}>
        <Router>
          <React.Fragment>
            <div>
              <Sidebar
                routes={this.state.mainRoutes}
                redirect={path => {
                  this.setState({ redirect: path });
                }}
              />
              <div className={"main-content"}>
                <Switch>
                  {!_.isNil(this.state.newLocation) ? <Redirect to={this.state.newLocation} /> : null}
                  <Route key={"home"} path={"/"} exact={true} render={props => <Index {...props} />} />
                  {_.map(this.state.routes, route => (
                    <Route
                      key={route.name}
                      path={route.path}
                      render={props => (
                        <React.Fragment>
                          <Viewer components={route.components} {...props} />
                        </React.Fragment>
                      )}
                    />
                  ))}
                  {_.map(this.state.minorRoutes, route => (
                    <Route
                      key={route.name}
                      path={route.path}
                      render={props => (
                        <React.Fragment>
                          <FullView component={route.component} {...props} />
                        </React.Fragment>
                      )}
                    />
                  ))}
                  {_.map(this.state.mainRoutes, route => (
                    <Route
                      key={route.name}
                      path={route.path}
                      render={props => (
                        <React.Fragment>
                          <SelectView components={route.components} {...props} />
                        </React.Fragment>
                      )}
                    />
                  ))}
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </Router>
      </div>
    );
  }

  // static propTypes = {  };

  // static defaultProps = {};
}

export default Routes;
