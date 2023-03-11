<template>
  <form>
    <textarea
      placeholder="write your message and press send ..."
      v-model="message"
      @keydown.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "@/composable/getUser";
import { updateTimestamp } from "@/firebase/config";
import useCollection from "@/composable/useCollection";
export default {
  setup() {
    const { user } = getUser();
    const message = ref("");
    const { error, addDoc } = useCollection("message");
    const handleSubmit = async () => {
      const chat = {
        message: message.value,
        name: user.value.displayName,
        createdAt: updateTimestamp(),
      };
      addDoc(chat);
      if (!error) {
        message.value = "";
      }
    };
    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
