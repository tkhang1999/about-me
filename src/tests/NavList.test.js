import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import NavList, { navItems } from "../components/NavList";

describe("test NavList component", () => {
  test("renders NavList correctly", () => {
    render(<NavList />);

    expect(screen.getByRole("list")).toBeTruthy();
    expect(screen.getAllByRole("listitem").length).toEqual(navItems.length + 1);
    expect(screen.getAllByRole("link").length).toEqual(navItems.length);
    expect(screen.getAllByRole("checkbox").length).toBeTruthy();
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

      render(<NavList />);

      expect(mockSetIsDarkTheme).toHaveBeenCalledTimes(1);
      expect(mockSetIsDarkTheme).toHaveBeenCalledWith(theme === "dark");

      cleanup();
    });
  });

  test("clicks a nav item", () => {
    const mockSetItem = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementation((initState) => [initState, mockSetItem]);

    render(<NavList />);
    mockSetItem.mockClear();

    const firstItem = screen.getAllByRole("link")[0];
    fireEvent.click(firstItem);

    expect(mockSetItem).toHaveBeenCalledTimes(1);
    expect(mockSetItem).toHaveBeenCalledWith(firstItem.attributes.href.value);
  });

  test("toggles light/dark theme", () => {
    [true, false].forEach((isDark) => {
      const mockIsDarkTheme = isDark;
      const mockSetIsDarkTheme = jest.fn();
      jest
        .spyOn(React, "useState")
        .mockImplementation(() => [mockIsDarkTheme, mockSetIsDarkTheme]);

      render(<NavList />);
      mockSetIsDarkTheme.mockClear();
      fireEvent.click(screen.getByRole("checkbox"));

      expect(mockSetIsDarkTheme).toHaveBeenCalledTimes(1);
      expect(mockSetIsDarkTheme).toHaveBeenCalledWith(!mockIsDarkTheme);

      cleanup();
    });
  });
});
