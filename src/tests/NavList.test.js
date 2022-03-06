import { shallow } from "enzyme";
import React from "react";

import NavList, { navItems } from "../components/NavList";

describe("test NavList component", () => {
  test("renders NavList correctly", () => {
    const wrapper = shallow(<NavList />);

    expect(wrapper.find(".nav__list").exists()).toBeTruthy();
    expect(wrapper.find(".nav__item").length).toEqual(navItems.length);
    expect(wrapper.find(".change__theme").length).toEqual(1);
  });

  test("sets theme at first render", () => {
    ["dark", "light"].forEach((theme) => {
      const mockSetDarkTheme = jest.fn();
      jest.spyOn(React, "useEffect").mockImplementation((f) => f());
      jest
        .spyOn(React, "useState")
        .mockImplementation((initState) => [initState, mockSetDarkTheme]);
      jest
        .spyOn(window.localStorage.__proto__, "getItem")
        .mockImplementation(() => theme);

      shallow(<NavList />);
      expect(mockSetDarkTheme).toHaveBeenCalledWith(theme === "dark");
    });
  });

  test("clicks a nav item", () => {
    const mockSetItem = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementation(() => ["#test", mockSetItem]);
    const firstItem = shallow(<NavList />)
      .find(".nav__item")
      .first()
      .find("a");
    firstItem.simulate("click");

    expect(mockSetItem).toHaveBeenCalledWith(firstItem.prop("href"));
  });

  test("toggles light/dark theme", () => {
    [true, false].forEach((isDark) => {
      const mockDarkTheme = isDark;
      const mockSetDarkTheme = jest.fn();
      jest
        .spyOn(React, "useState")
        .mockImplementation(() => [mockDarkTheme, mockSetDarkTheme]);
      const wrapper = shallow(<NavList />);
      wrapper.find(".change__theme").simulate("click");

      expect(mockSetDarkTheme).toHaveBeenCalledWith(!mockDarkTheme);
    });
  });
});
