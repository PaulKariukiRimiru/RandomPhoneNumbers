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

  it('sorts phonenumbers in descending order', () => {
    const ascendingButton = wrapper.find('.button').at(1);

    ascendingButton.simulate('click');

    expect(wrapper.find('.listitem').at(0).text()).toEqual('0'+Math.min.apply(null, wrapper.instance().state.phonenumbers))
  });
});
