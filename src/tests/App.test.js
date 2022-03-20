import { shallow } from "enzyme";
import React from "react";
import ScrollReveal from "scrollreveal";

import App from "../App";
import About from "../components/About";
import Footer from "../components/Footer";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Work from "../components/Work";

// mock ScollReveal constructor and its method "reveal"
const mockReveal = jest.fn();
jest.mock("scrollreveal", () => {
  return jest.fn().mockImplementation(() => {
    return { reveal: mockReveal };
  });
});

describe("test App component", () => {
  test("renders App correctly", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(NavBar).exists()).toBeTruthy();
    expect(wrapper.find(Home).exists()).toBeTruthy();
    expect(wrapper.find(About).exists()).toBeTruthy();
    expect(wrapper.find(Skills).exists()).toBeTruthy();
    expect(wrapper.find(Projects).exists()).toBeTruthy();
    expect(wrapper.find(Work).exists()).toBeTruthy();
    expect(wrapper.find(Footer).exists()).toBeTruthy();
  });

  test("constructs ScrollReveal correctly", () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    shallow(<App />);

    expect(ScrollReveal).toHaveBeenCalledTimes(1);
    expect(mockReveal).toHaveBeenCalledTimes(3);
  });
});
