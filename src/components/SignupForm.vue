<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="display name"
      required
      v-model="displayName"
    />
    <input type="text" placeholder="display email" required v-model="email" />
    <input type="text" placeholder="password" required v-model="password" />
    <button>Sign Up</button>
    <div class="erro">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composable/useSignup";
export default {
  setup() {
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      await signup(email.value, email.value, displayName.value);
    };
    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
