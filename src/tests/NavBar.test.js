import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import NavBar from "../components/NavBar";

describe("test NavBar component", () => {
  let mockSetIsMenuOpen;

  beforeEach(() => {
    mockSetIsMenuOpen = jest.fn();
  });

  test("renders NavBar correctly", () => {
    render(<NavBar isMenuOpen={false} setIsMenuOpen={mockSetIsMenuOpen} />);

    expect(screen.getByTestId("nav-bar")).toBeTruthy();
    expect(screen.getByTestId("nav-list")).toBeTruthy();
    expect(screen.getByTestId("nav-toggle")).toBeTruthy();

    expect(
      !screen.getByTestId("nav-list").classList.contains("show"),
    ).toBeTruthy();
  });

  test("renders NavBar correctly with open menu", () => {
    render(<NavBar isMenuOpen={true} setIsMenuOpen={mockSetIsMenuOpen} />);

    expect(screen.getByTestId("nav-bar")).toBeTruthy();
    expect(screen.getByTestId("nav-list")).toBeTruthy();
    expect(screen.getByTestId("nav-toggle")).toBeTruthy();
    expect(
      screen.getByTestId("nav-list").classList.contains("show"),
    ).toBeTruthy();
  });

  test("clicks nav toggle", () => {
    render(<NavBar isMenuOpen={false} setIsMenuOpen={mockSetIsMenuOpen} />);

    fireEvent.click(screen.getByTestId("nav-toggle"));
    expect(mockSetIsMenuOpen).toHaveBeenCalledWith(true);
  });
});
