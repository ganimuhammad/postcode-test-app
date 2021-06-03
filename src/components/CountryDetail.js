import React from "react";

function CountryDetail(props) {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.data.postcode}</div>
          <div className="meta">{props.data.country}</div>
          <div className="description">{props.data.region}</div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
