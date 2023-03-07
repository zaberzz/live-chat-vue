<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="display email" required v-model="email" />
    <input type="text" placeholder="password" required v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {};
    return { email, password, handleSubmit };
  },
};
</script>

<style></style>
