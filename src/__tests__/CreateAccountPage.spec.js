// Import the `mount()` method from Vue Test Utils
import { mount } from "@vue/test-utils";

// test all username validators
// test all password validators
// test that the proper error message renders on form

// test that the data/computed properties contain the correct values

//the component to test
import CreateAccountPage from "../composables/account-signup/TheCreateAccountPage.vue";
import CreateAccountForm from "../composables/account-signup/CreateAccountForm.vue";
import BaseButton from "../components/BaseButton.vue";

describe("TheCreateAccountPage", () => {
  describe("Able to render CreateAccountPage correctly", () => {
    it("Renders the proper heading on the page", () => {
      const wrapper = mount(CreateAccountPage);
      expect(wrapper.find("h2").text()).toBe("Create Account");
      wrapper.unmount();
    });
    it("Includes the form as a component", () => {
      const wrapper = mount(CreateAccountPage);
      const form = wrapper.findAllComponents(CreateAccountForm);
      expect(form).toHaveLength(1);
      wrapper.unmount();
    });
  });

  describe("Able to render the form properly", () => {
    const wrapper = mount(CreateAccountPage);
    const form = wrapper.findComponent(CreateAccountForm);
    const buttonComponents = form.findAllComponents(BaseButton);
    const cancelBtn = buttonComponents[0];
    const signupBtn = buttonComponents[1];

    it("has two base buttons within", () => {
      expect(buttonComponents).toHaveLength(2);
    });
    it("Contains the first button - the cancel button", () => {
      expect(cancelBtn.text()).toBe("Cancel");
    });
    it("Contains the Sign Up button", () => {
      expect(signupBtn.text()).toBe("Sign Up");
    });
    wrapper.unmount(CreateAccountPage);
  });
  describe("the buttons perform the correct actions", () => {
    const wrapper = mount(CreateAccountPage);
    const form = wrapper.findAllComponents(CreateAccountForm);
    const buttonComponents = form.findAllComponents(BaseButton);
    const cancelBtn = buttonComponents[0];
    const signupBtn = buttonComponents[1];
    const usernameInput = form.find('')
    describe("The Cancel button", () => {
      it("Clears all input fields", async () => {
        await usernameInput.setValue("Jose");
        await passwordInput.setValue("test");
        await cancelBtn.vm.$emit("child-click", "Cancel");
        expect(usernameInput.element.value).toBe("");
        expect(passwordInput.element.value).toBe("");
      });
    });
    //   //   describe("The Sign Up button", () => {
    //   //     it("Does not clear input fields after being clicked", async () => {
    //   //       await usernameInput.setValue("Testing...");
    //   //       await signupBtn.vm.$emit("child-click", "Sign Up");
    //   //       expect(usernameInput.element.value).toBe("Testing...");
    //   //     });
    //   //   });
    //   // });
    //   // describe("The form validators", () => {
    //   //   describe("The username validators", () => {
    //   //     it("Produces an error message if the username is left empty", async () => {
    //   //       await usernameInput.setValue(null);
    //   //       await signupBtn.vm.$emit("child-click", "Sign Up");
    //   //       expect(form.html()).toContain("Username must not be empty");
    //   //     });
    //   //   });
    //   //   it("Produces the proper error message if the username is less than 4 characters", async () => {
    //   //     await usernameInput.setValue(null);
    //   //     await usernameInput.setValue("123");
    //   //     expect(form.text()).toContain("Fart");
    //   //   });
  });
});
