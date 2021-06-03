import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Search.css";
import history from "../history";

class Search extends Component {
  state = {
    input: "",
  };

  onSubmit = (evt) => {
    evt.preventDefault();

    history.push(`/postcodes/${this.state.input}`);
  };
  render() {
    return (
      <div className="search">
        <h1 className="search-title">Know your Region</h1>
        <form onSubmit={this.onSubmit} className="ui action input">
          <input
            placeholder="Please enter your postcode"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
            data-testid="search-input"
          />

          <Link
            className="ui button primary"
            to={`/postcodes/${this.state.input}`}
          >
            Get Details
          </Link>
        </form>
      </div>
    );
  }
}

export default Search;
