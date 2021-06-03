import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Search from "../components/Search";

describe("Search postcode component", () => {
  test("testing input is working", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    const input = getByTestId("search-input");

    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });

  it("shows all input fields with empty values", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    expect(getByTestId("search-input").value).toBe("");
  });
});
