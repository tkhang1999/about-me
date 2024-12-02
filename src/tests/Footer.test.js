import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("test Footer component", () => {
  test("renders Footer correctly", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toBeTruthy();
    expect(screen.getAllByRole("paragraph").length).toEqual(2);
    expect(screen.getAllByRole("link").length).toEqual(3);
  });
});
