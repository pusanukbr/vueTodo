<template>
  <main>
    <Form />
  </main>
</template>

<script>
import Form from '@/components/login/Form.vue';

export default {
  name: "Login",
  components: {Form},
  data() {
    return {
      test: false,
    };
  },
}
</script>
