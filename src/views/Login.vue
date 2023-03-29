<template>
  <main class="login">
    <Header />
    <main class="login__main">
      <Form />
    </main>
    <Footer />
  </main>
</template>

<script>
import Form from "@/components/login/Form.vue";
import Header from "@/components/login/Header.vue";
import Footer from "@/components/login/Footer.vue";

export default {
  name: "Login",
  components: { Form, Header, Footer },
  data() {
    return {
      test: false,
    };
  },
};
</script>
