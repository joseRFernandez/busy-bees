<template>
  <div id="the-create-account-page">
    <div class="section is-info is-large">
      <div class="create-account-page__title">
        <h2 class="title">Create Account</h2>
      </div>

      <!-- <form section> -->
      <div class="create-account-page__buttons level">
        <create-account-button
          v-for="button in buttons"
          :key="button"
          :text="button.text"
          :propStyles="button.propStyles"
        ></create-account-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../components/BaseButton.vue";
export default {
  name: "the-create-account-page",
  components: {
    "create-account-button": BaseButton,
  },
  data() {
    return {
      buttons: [
        { text: "Cancel" },
        { text: "Sign Up", propStyles: ["is-primary"] },
      ],
    };
  },
};
</script>
