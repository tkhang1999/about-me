import { shallow } from "enzyme";
import Home from "../components/Home";

describe("test Home component", () => {
  test("renders Home correctly", () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find("#home").exists()).toBeTruthy();
    expect(wrapper.find(".home__data").length).toEqual(1);
    expect(wrapper.find(".home__intro").length).toEqual(1);
    expect(wrapper.find(".home__title").length).toEqual(1);
    expect(wrapper.find(".home__content").length).toEqual(1);
    expect(wrapper.find(".home__button").length).toEqual(1);
    expect(wrapper.find(".home__social").length).toEqual(1);
    expect(wrapper.find(".home__social-icon").length).toEqual(2);
    expect(wrapper.find(".home__img").length).toEqual(1);
  });
});
