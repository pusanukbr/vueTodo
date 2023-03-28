<template>
  <div class="select">
    <div v-if="label" class="select__label">
      {{ label }}
    </div>
    <select class="select__list" @change="changeSelect">
      <slot></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    label: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeSelect({ target: { value } }) {
      this.$emit("input", value);
    },
  },
};
</script>

<style></style>
