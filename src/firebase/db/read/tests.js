import { db } from "../..";
import { collection, getDocs } from "firebase/firestore";

// collection ref
const testRef = collection(db, "tests");

export const tests = getDocs(testRef)
  .then((snapShot) => {
    let books = [];
    snapShot.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    return books;
  })
  .catch((err) => console.log(err));
