<template>
  <div class="home">
    <base-button
      text="Click Me"
      propStyles="is-primary"
      @childClick="handleChildClick"
    >
      <slot />
    </base-button>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";

export default {
  name: "HomeView",
  components: { BaseButton },
  methods: {
    handleChildClick() {
      alert("Click received on parent");
    },
  },
};
</script>
