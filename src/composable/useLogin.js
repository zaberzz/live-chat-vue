import { ref } from "vue";
import firebaseConfig from "../firebase/config";
import { projectAuth } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
  try {
    const res = await firebaseConfig.projectAuth.signInWithEmailAndPassword(
      email,
      password
    );
    error.value = null;
    return res;
  } catch (error) {
    console.log(error.message);
    error.value = "Incorrect login credential";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
