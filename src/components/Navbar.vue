<template>
  <Nav>
    <div v-if="user">
      <p>hey there {{ user.displayName }}</p>
      <p class="email">currently you are logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </Nav>
</template>

<script>
import useLogout from "@/composable/useLogout";
import getUser from "../composable/getUser";
export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const handleClick = async () => {
      if (!error.value) {
        console.log("user logout");
      }
    };
    return { handleClick, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
