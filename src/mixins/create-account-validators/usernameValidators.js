export default {
  methods: {
    // isUniqueUsername() {
    //   // write an api call that checks to see if un does not exist in firestore
    // },
    allUsernameValidations(inputName) {
      const userErrors = [];

      const userNameTests = {
        isNotEmpty: () => {
          return inputName.length != 0 ? null : "Username must not be empty";
        },

        isAString: () => {
          return typeof inputName == "string" && inputName.length >= 1
            ? null
            : "Username must be of type string";
        },
        isMinLength: () => {
          return inputName.length >= 4
            ? null
            : "Username must have at least 4 characters";
        },
        containsOnlyAlphaNum: () => {
          return /^[a-z0-9]+$/i.test(inputName)
            ? null
            : "Username must be only letters, numbers, or spaces.  No special symbols";
        },
      };

      // here we are sending our inputUsername through the list of validators
      for (const vueTest in userNameTests) {
        if (userNameTests[vueTest]()) {
          userErrors.push(userNameTests[vueTest]());
        }
      }

      // TODO - once our validation architechture is complete we will handle this differently

      return userErrors;
    },
  },
};
