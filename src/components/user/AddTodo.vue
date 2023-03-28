<template>
  <form @submit.prevent="submit" class="addTodo">
    <div class="addTodo__wrapp">
      <Input v-model="title" type="text" placeholder="Title todo" />
      <Input v-model="userId" type="text" placeholder="Enter user ID" />
    </div>

    <Button type="submit" class="addTodo__button">Add Todo</Button>
  </form>
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
