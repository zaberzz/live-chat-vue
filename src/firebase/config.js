// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
// import "firebase/compat/auth";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import { initializeApp } from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCAYSBoZwdTGOdPjHw95c73cn7w-8U8qZs",
//   authDomain: "vue-project-c623a.firebaseapp.com",
//   projectId: "vue-project-c623a",
//   storageBucket: "vue-project-c623a.appspot.com",
//   messagingSenderId: "664424099799",
//   appId: "1:664424099799:web:b8f315d1447caa4532a592",
// };

// firebase.initializeApp(firebaseConfig);
// const projectAuth = firebase.auth();
// const projectFirestore = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// export { projectFirestore, timestamp, projectAuth };
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { updateDoc, serverTimestamp } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCAYSBoZwdTGOdPjHw95c73cn7w-8U8qZs",
  authDomain: "vue-project-c623a.firebaseapp.com",
  projectId: "vue-project-c623a",
  storageBucket: "vue-project-c623a.appspot.com",
  messagingSenderId: "664424099799",
  appId: "1:664424099799:web:b8f315d1447caa4532a592",
};

const app = initializeApp(firebaseConfig);

const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app);

const docRef = doc(db, "objects", "some-id");

// Update the timestamp field with the value from the server
const updateTimestamp = await updateDoc(docRef, {
  timestamp: serverTimestamp(),
});
export { projectAuth, projectFirestore, updateTimestamp };
