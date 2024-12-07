import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA2XqHWTePmFqr_Nnui2LuBnDLTo6t-6hQ",
  authDomain: "tv-management-system.firebaseapp.com",
  projectId: "tv-management-system",
  storageBucket: "tv-management-system.firebasestorage.app",
  messagingSenderId: "200485031456",
  appId: "1:200485031456:web:f1202acefa523cadc1f645"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const dataBase=getFirestore(app);