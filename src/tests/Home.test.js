import "react-intersection-observer/test-utils";

import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("test Home component", () => {
  test("renders Home correctly", () => {
    render(<Home />);

    expect(screen.getByTestId("home")).toBeTruthy();
    expect(screen.getAllByRole("heading").length).toEqual(1);
    expect(screen.getAllByRole("paragraph").length).toEqual(1);
    expect(screen.getAllByRole("link").length).toEqual(3);
    expect(screen.getAllByRole("presentation").length).toEqual(1);
  });
});
