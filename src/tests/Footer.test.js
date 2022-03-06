import { shallow } from "enzyme";
import Footer from "../components/Footer";

describe("test Footer component", () => {
  test("renders Footer correctly", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find("footer").exists()).toBeTruthy();
    expect(wrapper.find(".footer__title").length).toEqual(1);
    expect(wrapper.find(".footer__social").length).toEqual(1);
    expect(wrapper.find(".footer__icon").length).toEqual(2);
  });
});
