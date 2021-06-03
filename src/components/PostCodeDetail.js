import React, { Component } from "react";
import postcodeio from "../api/postcodesio";
import CountryDetail from "./CountryDetail";
import Loading from "./Loading";
import history from "../history";
import "../styles/PostCodeDetail.css";

class PostCodeDetail extends Component {
  state = {
    postCodeDetails: {},
    nearestPostCodeDetails: [],
    loading: true,
  };

  fetchPostCodeDatas() {
    this.setState({
      loading: true,
    });

    const postCodeResponse = postcodeio.get(
      `/postcodes/${this.props.match?.params.id}`
    );

    const nearestPostCodeResponse = postcodeio.get(
      `/postcodes/${this.props.match?.params.id}/nearest`
    );

    const promises = Promise.all([postCodeResponse, nearestPostCodeResponse]);

    promises
      .then((response) => {
        this.setState({
          postCodeDetails: response[0].data.result,
          nearestPostCodeDetails: response[1].data.result,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });

        history.push({
          pathname: "/error",
          state: err,
        });
      });
  }

  componentDidMount() {
    this.fetchPostCodeDatas();
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const { postcode, country, region } = this.state.postCodeDetails;

    return (
      <div className="postcodeDetail">
        <h1 data-testid="postcode" className="postcodeDetail-title">
          {postcode}
        </h1>
        <h2>Your country: {country}</h2>
        <h3>Your Region: {region}</h3>
        <h1>Nearest Countries</h1>
        <hr />
        <div className="ui equal width grid">
          {this.state.nearestPostCodeDetails.map((postcode, index) => (
            <CountryDetail key={index} data={postcode} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostCodeDetail;
