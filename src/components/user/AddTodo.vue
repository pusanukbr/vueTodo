<template>
  <form @submit.prevent="submit" class="addTodo">
    <div class="addTodo__wrapp">
      <Input v-model="title" type="text" placeholder="Title todo" />
      <Input v-model="userId" type="text" placeholder="Enter user ID" />
    </div>
    <div v-if="this.error" class="error">
      <div>{{ error }}</div>
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
      error: "",
    };
  },
  methods: {
    async submit() {
      if (!this.title || !this.userId)
        return (this.error = "Заповніть всі поля");
      try {
        const responce = await api.addTodo({
          title: this.title,
          userId: Number(this.userId),
          completed: false,
        });
        this.title = "";
        this.userId = "";
        this.$emit("update:todo", responce);
      } catch (error) {
        console.log("Errors server", error);
      }
    },
  },
  watch: {
    title() {
      if (this.error && this.title.length > 0) this.error = "";
    },
    title() {
      if (this.error && this.userId.length > 0) this.error = "";
    },
  },
};
</script>

<style></style>
