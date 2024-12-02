import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("test About component", () => {
  test("renders About correctly", () => {
    render(<About />);

    expect(screen.getByTestId("about")).toBeTruthy();
    expect(screen.getAllByRole("img").length).toEqual(1);
    expect(screen.getAllByRole("paragraph").length).toEqual(1);
  });
});
