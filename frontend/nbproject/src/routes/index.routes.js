import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import RegistrationForm from "../Registration/Forms/registraion";
import Home from "../app/components/home/home";

class Landing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route exact path="/registation" component={RegistrationForm}></Route> */}
        </Switch>
      </div>
    );
  }
}
export default Landing;
