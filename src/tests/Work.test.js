import { shallow } from "enzyme";
import Work from "../components/Work";

describe("test Work component", () => {
  test("renders Work correctly", () => {
    const wrapper = shallow(<Work />);

    expect(wrapper.find("#work").exists()).toBeTruthy();
    expect(wrapper.find(".section-title").length).toEqual(1);
    expect(wrapper.find(".work__list").length).toEqual(1);
    expect(wrapper.find(".work__container").length).toEqual(6);
  });
});
