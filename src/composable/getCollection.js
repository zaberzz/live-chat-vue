import { projectFirestore } from "@/firebase/config";
import { collection } from "firebase/firestore";
import { ref } from "vue";

const getCollection = () => {
  const document = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");
  collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      document.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      document.value = null;
      error.value = "could not fetch data";
    }
  );
  return { document, error };
};
export default getCollection;
