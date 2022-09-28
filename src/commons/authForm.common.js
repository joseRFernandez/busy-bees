export default {
  data() {
    return {
      inputUsername: "",
      inputPassword: "",
      formSubmitted: false,
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
      this.passwordError = "";
    },
    toggleFormSubmitted() {
      this.formSubmitted = !this.formSubmitted;
    },
  },
};
