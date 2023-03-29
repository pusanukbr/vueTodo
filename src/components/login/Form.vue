<template>
  <form @submit.prevent="submit" class="formLogin">
    <div class="formLogin__header">description</div>
    <div class="formLogin__body">
      <div class="formLogin__description">description</div>
      <div class="formLogin__block">
        <div class="formLogin__field">
          <Input
            ref="name"
            v-model.trim="name"
            name="name"
            :errors="errors"
            type="text"
            placeholder="User Name"
          />
        </div>
        <div class="formLogin__field">
          <Input
            ref="phone"
            v-model.trim="phone"
            name="phone"
            type="phone"
            :errors="errors"
            placeholder="Phone Number"
          />
        </div>
      </div>

      <div v-if="errors.length && !errors[0].type" class="error">
        {{ errors[0].text }}
      </div>
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

      if (!this.name || !this.phone)
        return this.setError({ text: "Заповніть всі поля" });

      if (!regexPhone.test(this.phone) || !regexName.test(this.name)) {
        if (!regexName.test(this.name))
          this.setError({ text: "Некоректне ім'я", type: "name" });
        if (!regexPhone.test(this.phone))
          this.setError({ text: "Некоректний телефон", type: "phone" });
        return;
      }

      const users = await api.getUsers();
      // .split(" ") is needed to delete unnesessary code(x000) at the end
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

      this.setError({ text: "Not found user" });
    },
    setError({ text, type }) {
      this.errors.push({ text, type });
      if (!type) {
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
      if (this.errors?.length && this.name.length > 0) this.errors = [];
    },
    phone() {
      if (this.errors?.length && this.phone.length > 0) this.errors = [];
    },
  },
};
</script>
