import { shallow } from "enzyme";
import React from "react";

import NavBar from "../components/NavBar";
import NavList from "../components/NavList";

describe("test NavBar component", () => {
  test("renders NavBar correctly", () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.find("nav").exists()).toBeTruthy();
    expect(wrapper.find(".nav__menu").exists()).toBeTruthy();
    expect(wrapper.find(".show").exists()).toBeFalsy();
    expect(wrapper.find(NavList).exists()).toBeTruthy();
    expect(wrapper.find(".nav__logo").length).toEqual(1);
    expect(wrapper.find(".nav__toggle").length).toEqual(1);
  });

  test("renders NavBar correctly with true toggle", () => {
    jest.spyOn(React, "useState").mockImplementation(() => [true, jest.fn()]);
    const wrapper = shallow(<NavBar />);

    expect(wrapper.find("nav").exists()).toBeTruthy();
    expect(wrapper.find(".nav__menu").exists()).toBeTruthy();
    expect(wrapper.find(".show").exists()).toBeTruthy();
    expect(wrapper.find(NavList).exists()).toBeTruthy();
  });

  test("clicks nav toggle", () => {
    const mockToggle = false;
    const mockSetToggle = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementation(() => [mockToggle, mockSetToggle]);
    const wrapper = shallow(<NavBar />);
    wrapper.find("#nav-toggle").simulate("click");

    expect(mockSetToggle).toHaveBeenCalledWith(!mockToggle);
  });
});
