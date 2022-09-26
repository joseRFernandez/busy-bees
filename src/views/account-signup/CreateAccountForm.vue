<template>
  <div class="create-account-form">
    <div class="field">
      <label for="username" class="label">Username</label>
      <p class="control has-icons-left has-icons-right">
        <input
          class="input"
          type="text"
          placeholder="eg. JohnSmith123"
          v-model="inputUsername"
        />
        <span class="icon is-small is-left">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <label for="password" class="label">Password</label>
      <p class="control has-icons-left">
        <input
          class="input"
          type="password"
          v-model="inputPassword"
          placeholder="Password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
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
  </div>
</template>

<script>
import createAccountButton from "../../components/BaseButton.vue";
export default {
  name: "create-account-form",
  components: {
    createAccountButton,
  },
  data() {
    return {
      buttons: [
        { text: "Cancel", propStyles: ["is-warning"] },
        { text: "Sign Up", propStyles: ["is-primary"] },
      ],
      inputUsername: "",
      inputPassword: "",
    };
  },
  methods: {
    handleChildClick() {
      alert("Child clicked");
    },
  },
};
</script>
