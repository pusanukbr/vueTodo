<template>
  <div>
    <form @submit.prevent="submit">
      <Input v-model="title" type="text" placeholder="Title todo" />
      <Input v-model="userId" type="text" placeholder="Enter user ID" />
      <Button type="submit">Add Todo</Button>
    </form>
  </div>
</template>

<script>
import Button from "@/components/ui/Button.vue";
import Input from "@/components/ui/Input.vue";
import api from "@/api";
export default {
  name: "AddTodo",
  components: { Input, Button },
  data() {
    return {
      title: "",
      userId: "",
    };
  },
  methods: {
    async submit() {
      console.log("test");
      const responce = await api.addTodo({
        title: this.title,
        userId: Number(this.userId),
        completed: false,
      });
      this.$emit("update:todo", responce);
    },
  },
};
</script>

<style></style>
