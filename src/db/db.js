import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOg_XRKgrGjINnqig_xnReKvgnrjL-ZKE",
  authDomain: "ecommerce-pclux.firebaseapp.com",
  projectId: "ecommerce-pclux",
  storageBucket: "ecommerce-pclux.firebasestorage.app",
  messagingSenderId: "615767437518",
  appId: "1:615767437518:web:762ef0a3b64c7067f0a09f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db