// import { projectAuth } from "@/firebase/config";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import firebaseConfig from "../firebase/config";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const signup = async (email, password, displayName) => {
  error.value = null;
  // const auth = getAuth();
  try {
    const res = await firebaseConfig.projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("no user identified");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    return res;
  } catch (error) {
    console.log(error.message);
    error.value = error.message;
  }
};

const useSignup = () => {
  return { error, signup };
};
export default useSignup;
