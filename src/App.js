import React, { Component, useEffect,useState } from "react";
import { loginUser } from "./services/user";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import ListBrokenItem from "./components/listBrokenItems";

export default class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
            <Route path="/list_broken_item">
                <ListBrokenItem />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>

    );
  }
}
