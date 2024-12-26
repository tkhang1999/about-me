import { render, screen } from "@testing-library/react";
import Skills from "../components/Skills";

describe("test Skills component", () => {
  test("renders Skills correctly", () => {
    render(<Skills />);

    expect(screen.getByTestId("skills")).toBeTruthy();
    expect(screen.getAllByRole("heading").length).toEqual(2);
    expect(screen.getAllByRole("paragraph").length).toEqual(1);
    expect(screen.getByText("Python")).toBeTruthy();
    expect(screen.getByText("Java")).toBeTruthy();
    expect(screen.getByText("JavaScript/TypeScript")).toBeTruthy();
    expect(screen.getByText("Machine Learning/Deep Learning")).toBeTruthy();
    expect(screen.getByText("Full-stack Development")).toBeTruthy();
    expect(screen.getByText("DevOps")).toBeTruthy();
  });
});
