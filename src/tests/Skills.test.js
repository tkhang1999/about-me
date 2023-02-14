import { shallow } from "enzyme";
import Skills from "../components/Skills";

describe("test Skills component", () => {
  test("renders Skills correctly", () => {
    const wrapper = shallow(<Skills />);

    expect(wrapper.find("#skills").exists()).toBeTruthy();
    expect(wrapper.find(".skills__container").length).toEqual(1);
    expect(wrapper.find(".skills__subtitle").length).toEqual(1);
    expect(wrapper.find(".skills__text").length).toEqual(1);
    expect(wrapper.find(".skills__list").length).toEqual(2);
    expect(wrapper.find(".skills__data").length).toEqual(6);
  });
});
