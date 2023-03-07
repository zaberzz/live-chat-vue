<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="display email" required v-model="email" />
    <input type="text" placeholder="password" required v-model="password" />
    <button>Login</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "@/composable/useLogin";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const { error, login } = useLogin();
    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
      }
    };
    return { email, password, handleSubmit };
  },
};
</script>

<style></style>
