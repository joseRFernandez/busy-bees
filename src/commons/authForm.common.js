export default {
  data() {
    return {
      inputUsername: "",
      inputPassword: "",
      formSubmitted: false,
      usernameError: "",
      passwordError: "",
    };
  },
  methods: {
    clearUsername() {
      this.inputUsername = "";
    },
    clearPassword() {
      this.inputPassword = "";
    },
    clearErrors() {
      (this.usernameError = ""), (this.passwordError = "");
    },
    toggleFormSubmitted() {
      this.formSubmitted = !this.formSubmitted;
    },
  },
};
