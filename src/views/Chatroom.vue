<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from "@/components/NewChatForm.vue";
import Navbar from "@/components/Navbar.vue";
import getUser from "@/composable/getUser";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import NewChatForm from "@/components/NewChatForm.vue";
export default {
  components: { Navbar, NewChatForm },
  setup() {
    const router = useRouter();
    const { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
