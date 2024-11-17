import { initializeApp } from "firebase/app";
import { getRemoteConfig } from "firebase/remote-config";

const firebaseConfig = {
  apiKey: "AIzaSyAbowc43-ZTUBYxkCbIytn7Lsh8Gf3bXFc",
  authDomain: "ionic-todolist-79199.firebaseapp.com",
  projectId: "ionic-todolist-79199",
  storageBucket: "ionic-todolist-79199.firebasestorage.app",
  messagingSenderId: "313797655821",
  appId: "1:313797655821:web:7da4629ed993cce82d4444",
  measurementId: "G-HXVQBMBGQZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const remoteConfig = getRemoteConfig(app);

remoteConfig.settings.minimumFetchIntervalMillis = 0; 
