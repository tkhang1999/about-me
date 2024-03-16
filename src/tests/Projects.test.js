import { shallow } from "enzyme";
import Projects from "../components/Projects";

describe("test Projects component", () => {
  test("renders Projects correctly", () => {
    const wrapper = shallow(<Projects />);

    expect(wrapper.find("#projects").exists()).toBeTruthy();
    expect(wrapper.find(".section-title").length).toEqual(1);
    expect(wrapper.find(".project__list").length).toEqual(1);
    expect(wrapper.find(".project__container").length).toEqual(3);
  });
});
