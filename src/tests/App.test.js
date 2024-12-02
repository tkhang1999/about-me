import "react-intersection-observer/test-utils";

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("test App component", () => {
  test("renders App correctly", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeTruthy();
    expect(screen.getByTestId("nav-bar")).toBeTruthy();
    expect(screen.getByTestId("home")).toBeTruthy();
    expect(screen.getByTestId("about")).toBeTruthy();
    expect(screen.getByTestId("skills")).toBeTruthy();
    expect(screen.getByTestId("projects")).toBeTruthy();
    expect(screen.getByTestId("work")).toBeTruthy();
    expect(screen.getByTestId("footer")).toBeTruthy();
  });

  test("clicks main should close the nav menu if it is open", () => {
    const mockSetIsMenuOpen = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementation((_) => [true, mockSetIsMenuOpen]);

    render(<App />);
    mockSetIsMenuOpen.mockClear();

    fireEvent.click(screen.getByRole("main"));
    expect(mockSetIsMenuOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsMenuOpen).toHaveBeenCalledWith(false);
  });

  test("clicks main should do nothing if nav menu is closed", () => {
    const mockSetIsMenuOpen = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementation((_) => [false, mockSetIsMenuOpen]);

    render(<App />);
    mockSetIsMenuOpen.mockClear();

    fireEvent.click(screen.getByRole("main"));
    expect(mockSetIsMenuOpen).toHaveBeenCalledTimes(0);
  });
});
