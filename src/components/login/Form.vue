<template>
  <form @submit.prevent="submit">
    <Input
      ref="name"
      v-model.trim="name"
      name="name"
      :errors="errors"
      type="text"
      placeholder="User Name"
    />
    <Input
      ref="phone"
      v-model.trim="phone"
      name="phone"
      type="phone"
      :errors="errors"
      placeholder="Phone Number"
    />
    <div v-if="errors.length && errors[0].type === 'submit'">
      {{ errors[0].text }}
    </div>
    <Button type="submit">Submit</Button>
  </form>
</template>

<script>
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";
import api from "@/api";
import { store } from "@/store";
export default {
  name: "Form",
  components: {
    Input,
    Button,
  },
  data() {
    return {
      name: "",
      phone: "",
      errors: [],
    };
  },
  methods: {
    async submit() {
      const regexPhone = /[0-9+#-()]/;
      const regexName = /[a-zA-Z]/;

      if (!this.name || !this.phone) return;

      if (!regexPhone.test(this.phone) || !regexName.test(this.name)) {
        if (!regexName.test(this.name))
          this.setError({ text: "Incorect name", type: "name" });
        if (!regexPhone.test(this.phone))
          this.setError({ text: "Incorect phone", type: "phone" });
        return;
      }

      console.log("test");
      const users = await api.getUsers();
      const user = users.find(
        (user) =>
          user.username.trim() === this.name && user.phone.trim() === this.phone
      );
      if (user) {
        user.allUsers = users.length + 1;
        store.setUser(user);
        return this.$router.push({ name: "User" });
      }
      this.setError({ text: "Not found user", type: "submit" });
    },
    setError({ text, type }) {
      this.errors.push({ text, type });
      if (type === "submit") {
        this.name = "";
        this.phone = "";
        return this.$refs.name.$refs.input.focus();
      }
      this[type] = "";
      this.$refs[this.errors[0].type].$refs.input.focus();
    },
  },
  watch: {
    name() {
      if (this.name.length > 0) this.errors = [];
    },
  },
};
</script>
