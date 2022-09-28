export default {
  methods: {
    allPasswordValidations(inputPassword) {
      const userErrors = [];

      const passwordTests = {
        isNotEmpty: () => {
          return inputPassword.length != 0
            ? null
            : "Password must not be empty";
        },
        isMinLength: () => {
          return inputPassword.length >= 5
            ? null
            : "Password must have at least 5 characters";
        },
        hasNoEmptySpaces: () => {
          if (inputPassword.length) {
            return /\s/.test(inputPassword)
              ? "Password must not contain any empty spaces"
              : null;
          }
        },
        // todo - when we are able to connect to firestore we can implement the below validations

        // password should be different than username

        // password should be different than actual name
      };

      for (const vueTest in passwordTests) {
        if (passwordTests[vueTest]()) {
          userErrors.push(passwordTests[vueTest]());
        }
      }

      return userErrors;
    },
  },
};
