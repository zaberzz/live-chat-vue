import { _ } from "core-js";
import { ref } from "vue";
import firebaseConfig from "../firebase/config";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  console.log("the user is currently,", _user);
  user.value = _user;
});
const getUser = () => {
  return { user };
};
export default getUser;
