import React from "react";
import CountryDetail from "../components/CountryDetail";

import { render } from "@testing-library/react";

const stubbedCountry = {
  postcode: "SE18 3AD",
  country: "England",
  region: "London",
};

it("matches snapshot", () => {
  const { asFragment } = render(<CountryDetail data={stubbedCountry} />);

  expect(asFragment()).toMatchSnapshot();
});
