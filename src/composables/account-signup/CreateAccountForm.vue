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
        <button @click.prevent="testRead">Read Tests</button>
        <button @click.prevent="testCreate">Write Tests</button>
      </div>
    </form>
  </div>
</template>

<script>
import createAccountButton from "../../components/BaseButton.vue";
import formValidators from "../../mixins/create-account-validators";
import authFormCommon from "../../commons/authForm.common";
import { tests } from "../../firebase/db/read/tests";
import { addUser } from "../../firebase/db/create/tests";

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
      ableToSubmitNewAccount: false,
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
    formFreeOfErrors() {
      return this.userNameValid && this.passwordValid;
    },
  },
  methods: {
    testRead() {
      console.log(tests);
    },
    testCreate() {
      addUser(this.inputUsername, this.inputPassword);
    },
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
    },
    validatePassword(inputPassword) {
      return this.allPasswordValidations(inputPassword);
    },
    handleFormSubmit() {
      this.clearErrors();
      if (this.formFreeOfErrors) {
        // we should use a modal here to look cool
        this.testCreate();
      } else {
        // here we need to show user that they need to fix errors
        alert("fix yo shit");
      }
    },
  },
};
</script>
