import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";
import "../styles/Error.css";

function Error(props) {
  return (
    <div className="error">
      <h1 className="error-title">Some Error occured</h1>
      <h2 className="error-description">
        {props.location.state.toJSON().message}
      </h2>
      <hr />
      <Link className="error-link" to="/">
        search postcode
      </Link>
    </div>
  );
}

export default Error;
