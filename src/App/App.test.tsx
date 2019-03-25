import React from "react";
import { mount, ReactWrapper } from "enzyme";

import App from "./";

describe("The App component", () => {
  let wrapper: ReactWrapper;
  jest.setTimeout(20000);

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("matches snapshot", () => {
    expect(<App />).toMatchSnapshot();
  });

  it("displays all numbers", () => {
    expect(wrapper.find('.listitem').length).toEqual(10000);
  });
});
