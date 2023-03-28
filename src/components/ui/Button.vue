<template>
  <div>
    <button :type="type" @click="click"><slot /></button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
}
</script>