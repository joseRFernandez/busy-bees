import { db } from "../..";
import { setDoc, doc } from "firebase/firestore";

// Add a new document with a generated id.
export const addUser = (userName, password) => {
  setDoc(doc(db, "tests", userName), {
    name: userName,
    password,
  });
};
