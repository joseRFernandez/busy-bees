<template>
  <div class="home">
    <the-create-account-page></the-create-account-page>
  </div>
</template>

<script>
import TheCreateAccountPage from "./account-signup/TheCreateAccountPage.vue";
export default {
  name: "HomeView",
  components: { TheCreateAccountPage },
};
</script>
