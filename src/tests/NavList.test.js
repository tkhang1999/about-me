import { shallow } from "enzyme";
import React from "react";
import Toggle from "react-toggle";

import NavList, { navItems } from "../components/NavList";

describe("test NavList component", () => {
  test("renders NavList correctly", () => {
    const wrapper = shallow(<NavList />);

    expect(wrapper.find(".nav__list").exists()).toBeTruthy();
    expect(wrapper.find(".nav__item").length).toEqual(navItems.length);
    expect(wrapper.find(Toggle).length).toEqual(1);
  });

  test("sets theme at first render", () => {
    ["dark", "light"].forEach((theme) => {
      const mockSetIsDarkTheme = jest.fn();
      jest.spyOn(React, "useEffect").mockImplementation((f) => f());
      jest
        .spyOn(React, "useState")
        .mockImplementation((initState) => [initState, mockSetIsDarkTheme]);
      jest
        .spyOn(window.localStorage.__proto__, "getItem")
        .mockImplementation(() => theme);

      shallow(<NavList />);
      expect(mockSetIsDarkTheme).toHaveBeenCalledWith(theme === "dark");
    });
  });

  test("clicks a nav item", () => {
    const mockSetItem = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementation((initState) => [initState, mockSetItem]);
    const firstItem = shallow(<NavList />)
      .find(".nav__item")
      .first()
      .find("a");
    firstItem.simulate("click");

    expect(mockSetItem).toHaveBeenCalledWith(firstItem.prop("href"));
  });

  test("toggles light/dark theme", () => {
    [true, false].forEach((isDark) => {
      const mockIsDarkTheme = isDark;
      const mockSetIsDarkTheme = jest.fn();
      jest
        .spyOn(React, "useState")
        .mockImplementation(() => [mockIsDarkTheme, mockSetIsDarkTheme]);
      const wrapper = shallow(<NavList />);
      wrapper.find(Toggle).simulate("change");

      expect(mockSetIsDarkTheme).toHaveBeenCalledWith(!mockIsDarkTheme);
    });
  });
});
