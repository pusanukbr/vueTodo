<template>
  <div class="input">
    <input
      :type="type"
      ref="input"
      :value="value"
      class="custom__input"
      :placeholder="placeholder"
      @input="handlerInput"
    />
    <div v-if="checkErrors" class="error">
      {{ errors[0].text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    errors: {
      type: Array,
      required: false,
    },
  },
  computed: {
    checkErrors() {
      return this.errors?.length && this.errors[0].type === this.name;
    },
  },
  methods: {
    handlerInput({ target: { value } }) {
      this.$emit("input", value);
    },
  },
};
</script>
