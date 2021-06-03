import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import Search from "./Search";
import PostCodeDetail from "./PostCodeDetail";
import Error from "./Error";
import history from "../history";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Route path="/" exact component={Search} />
          <Route path="/postcodes/:id" component={PostCodeDetail}></Route>
          <Route path="/error" component={Error} />
        </Router>
      </div>
    );
  }
}

export default App;
