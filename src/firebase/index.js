import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getFirestore } from "firebase/firestore";

// init firebase app
export const firebaseApp = initializeApp(firebaseConfig);

// init services
export const db = getFirestore();
