// Import the `mount()` method from Vue Test Utils
import { mount } from "@vue/test-utils";

// The component to test
import BaseButton from "../components/BaseButton.vue";
describe("BaseButton", () => {
  describe("Able to render correctly", () => {
    it("displays proper text when no text props are passsed", () => {
      const wrapper = mount(BaseButton);
      expect(wrapper.text()).toBe("Button");
    });
    it("displays proper text", () => {
      const wrapper = mount(BaseButton, {
        props: {
          text: "Click Me",
        },
      });
      expect(wrapper.text()).toContain("Click Me");
    });
    it("displays proper styles when no additional class is passed", () => {
      const wrapper = mount(BaseButton, {
        props: {
          text: "Default",
        },
      });
      expect(wrapper.attributes("class")).toBe("button");
    });

    it("displays proper styles when 1 additional class is passed", () => {
      const wrapper = mount(BaseButton, {
        props: {
          text: "Default",
          propStyles: ["is-info"],
        },
      });
      expect(wrapper.attributes("class")).toBe("button is-info");
    });

    it("displays proper styles when 2 additional classes are passed", () => {
      const wrapper = mount(BaseButton, {
        props: {
          text: "Default",
          propStyles: ["is-info hidden"],
        },
      });
      expect(wrapper.attributes("class")).toBe("button is-info hidden");
    });
  });

  describe("emits events to a parent properly", () => {
    it("emits an event", async () => {
      const wrapper = mount(BaseButton);

      wrapper.vm.$emit("foo");
      wrapper.vm.$emit("foo", 123);

      await wrapper.vm.$nextTick();

      expect(wrapper.emitted("foo")).toBeTruthy();
    });
  });
});
