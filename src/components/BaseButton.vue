// basebutton is designed to inherit text to display and one Bulma btn class //
alternatively, it can receive a component as a slot to display

<template>
  <button class="button" :class="propStyles" @click.prevent="childClick">
    <span>{{ text }}</span>
    <slot />
  </button>
</template>

<script>
export default {
  name: "base-button",
  props: {
    propStyles: {
      type: Array,
      required: false,
    },
    text: {
      type: String,
      default: "Button",
    },
  },
  methods: {
    childClick() {
      this.$emit("child-click", this.text);
    },
  },
};
</script>
