<template>
  <div class="create-account-form">
    <form class="form">
      <div class="field">
        <label for="username" class="label">Username</label>
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="text"
            autocomplete="username"
            placeholder="eg. JohnSmith123"
            v-model="inputUsername"
          />
          <span class="icon is-small is-left">
            <i class="fa-solid fa-user"></i>
          </span>
          <span class="icon is-small is-right" v-if="userNameValid">
            <i class="fas fa-check"></i>
          </span>
        </p>
        <p class="error-message" v-if="usernameError">
          {{ usernameError }}
        </p>
      </div>
      <div class="field">
        <label for="password" class="label">Password</label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            autocomplete="current-password"
            v-model="inputPassword"
            placeholder="Password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
        <p class="error-message" v-if="passwordError">{{ passwordError }}</p>
      </div>
      <div class="create-account-page__buttons">
        <create-account-button
          v-for="button in buttons"
          :key="button"
          :text="button.text"
          :propStyles="button.propStyles"
          @childClick="handleChildClick"
          class="create-account-page__button"
        ></create-account-button>
      </div>
    </form>
  </div>
</template>

<script>
import createAccountButton from "../../components/BaseButton.vue";
import formValidators from "../../mixins/create-account-validators";
import authFormCommon from "../../commons/authForm.common";

export default {
  name: "create-account-form",
  components: {
    createAccountButton,
  },
  mixins: [formValidators, authFormCommon],
  data() {
    return {
      buttons: [
        { text: "Cancel", propStyles: ["is-warning"], isLoading: false },
        { text: "Sign Up", propStyles: ["is-primary"], isLoading: false },
      ],
    };
  },
  computed: {
    userNameValid() {
      return this.validateUsername(this.inputUsername).length > 0
        ? false
        : true;
    },
    passwordValid() {
      return this.validatePassword(this.inputPassword).length > 0
        ? false
        : true;
    },
  },
  methods: {
    //UNFINISHED
    // idea is that we will perform an action based on the click text
    handleChildClick(childText) {
      if (childText == "Sign Up") {
        // if we clicked the green btn send over username to validation
        this.handleFormSubmit();
      }
      if (childText == "Cancel") {
        this.clearInputs();
      }
    },
    validateUsername(inputUsername) {
      return this.allUsernameValidations(inputUsername);
    },
    clearInputs() {
      this.clearUsername();
      this.clearPassword();
      if (this.clearErrors) {
        this.clearErrors();
      }
    },
    validatePassword(inputPassword) {
      return this.allPasswordValidations(inputPassword);
    },
    handleFormSubmit() {
      // clear errors
      this.clearErrors();
      // if errors exist - set them
      const usernameErrors = this.validateUsername(this.inputUsername);
      if (usernameErrors.length > 0) {
        this.usernameError = usernameErrors[0];
      }
      const passwordErrors = this.validatePassword(this.inputPassword);
      if (passwordErrors.length > 0) {
        this.passwordError = passwordErrors[0];
      }
    },
  },
};
</script>
