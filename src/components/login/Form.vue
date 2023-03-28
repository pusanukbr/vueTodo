<template>
  <form @submit.prevent="submit" class="formLogin">
    <div class="formLogin__block">
      <Input
        ref="name"
        v-model.trim="name"
        name="name"
        :errors="errors"
        type="text"
        placeholder="User Name"
      />
    </div>
    <div class="formLogin__block">
      <Input
        ref="phone"
        v-model.trim="phone"
        name="phone"
        type="phone"
        :errors="errors"
        placeholder="Phone Number"
      />
    </div>
    <div v-if="errors.length && errors[0].type === 'submit'">
      {{ errors[0].text }}
    </div>
    <div class="formLogin__block">
      <Button type="submit">Submit</Button>
    </div>
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
          user.username.trim() === this.name &&
          user.phone.split(" ")[0] === this.phone
      );
      if (user) {
        store.setUser(user);
        store.setUsersAll(users.length + 1);
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
