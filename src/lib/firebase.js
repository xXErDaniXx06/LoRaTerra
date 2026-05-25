import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.LORA_API_KEY,
  authDomain: import.meta.env.LORA_AUTH_DOMAIN,
  projectId: import.meta.env.LORA_PROJECT_ID,
  storageBucket: import.meta.env.LORA_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.LORA_MESSAGING_SENDER_ID,
  appId: import.meta.env.LORA_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
