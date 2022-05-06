import { shallow } from "enzyme";
import React from "react";

import NavBar from "../components/NavBar";
import NavList from "../components/NavList";

describe("test NavBar component", () => {
  let mockIsMenuOpen;
  let mockSetIsMenuOpen;

  beforeEach(() => {
    mockIsMenuOpen = false;
    mockSetIsMenuOpen = jest.fn();
  });

  test("renders NavBar correctly", () => {
    const wrapper = shallow(
      <NavBar isMenuOpen={mockIsMenuOpen} setIsMenuOpen={mockSetIsMenuOpen} />
    );

    expect(wrapper.find("nav").exists()).toBeTruthy();
    expect(wrapper.find(".nav__menu").exists()).toBeTruthy();
    expect(wrapper.find(".show").exists()).toBeFalsy();
    expect(wrapper.find(NavList).exists()).toBeTruthy();
    expect(wrapper.find(".nav__logo").length).toEqual(1);
    expect(wrapper.find(".nav__toggle").length).toEqual(1);
  });

  test("renders NavBar correctly with open menu", () => {
    mockIsMenuOpen = true;
    const wrapper = shallow(
      <NavBar isMenuOpen={mockIsMenuOpen} setIsMenuOpen={mockSetIsMenuOpen} />
    );

    expect(wrapper.find("nav").exists()).toBeTruthy();
    expect(wrapper.find(".nav__menu").exists()).toBeTruthy();
    expect(wrapper.find(".show").exists()).toBeTruthy();
    expect(wrapper.find(NavList).exists()).toBeTruthy();
  });

  test("clicks nav toggle", () => {
    const wrapper = shallow(
      <NavBar isMenuOpen={mockIsMenuOpen} setIsMenuOpen={mockSetIsMenuOpen} />
    );
    wrapper.find("#nav-toggle").simulate("click");

    expect(mockSetIsMenuOpen).toHaveBeenCalledWith(!mockIsMenuOpen);
  });
});
