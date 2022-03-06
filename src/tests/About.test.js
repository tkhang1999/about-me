import { shallow } from "enzyme";
import About from "../components/About";

describe("test About component", () => {
  test("renders About correctly", () => {
    const wrapper = shallow(<About />);

    expect(wrapper.find("#about").exists()).toBeTruthy();
    expect(wrapper.find(".about__container").length).toEqual(1);
    expect(wrapper.find(".about__img").length).toEqual(1);
    expect(wrapper.find(".about__subtitle").length).toEqual(1);
    expect(wrapper.find(".about__text").length).toEqual(1);
  });
});
