// Import the `mount()` method from Vue Test Utils
import { mount } from "@vue/test-utils";

// The component to test
import BaseButton from "../components/BaseButton.vue";
describe("BaseButton", () => {
  describe("Able to render correctly", () => {
    test("displays proper text", () => {
      // mount() returns a wrapped Vue component we can interact with
      const wrapper = mount(BaseButton, {
        props: {
          text: "Click Me",
        },
      });
      // Assert the rendered text of the component
      expect(wrapper.text()).toContain("Click Me");
    });
  });
  test("displays proper styles when no additional class is passed", () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: "Default",
      },
    });
    expect(wrapper.attributes("class")).toBe("button");
  });

  test("displays proper styles when 1 additional class is passed", () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: "Default",
        propStyles: ["is-info"],
      },
    });
    expect(wrapper.attributes("class")).toBe("button is-info");
  });

  test("displays proper styles when 2 additional classes are passed", () => {
    const wrapper = mount(BaseButton, {
      props: {
        text: "Default",
        propStyles: ["is-info hidden"],
      },
    });
    expect(wrapper.attributes("class")).toBe("button is-info hidden");
  });
});
