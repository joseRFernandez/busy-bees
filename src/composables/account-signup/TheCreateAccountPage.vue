<template>
  <div id="the-create-account-page">
    <div class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <h2 class="title">Create Account</h2>
        <CreateAccountForm />
      </div>
    </div>
  </div>
</template>

<script>
import CreateAccountForm from "./CreateAccountForm.vue";
export default {
  name: "the-create-account-page",
  components: {
    CreateAccountForm,
  },
};
</script>
