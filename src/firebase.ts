import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { updateFCMToken } from "./api";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// get registration token
export const requestForToken = async (uid: string) => {
  const isSupported =
    "Notification" in window &&
    "serviceWorker" in navigator &&
    "PushManager" in window;
  if (!isSupported) return;
  try {
    // request nitification permission
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
      });
      await updateFCMToken({
        uid: uid,
        token: token,
      });
    } else {
      console.error("Permission not granted for Notification");
    }
  } catch (error) {
    console.error("[ERROR]: cannot get token", error);
  }
};

// Listen for messages when the app is in the foreground
export const getTestMessage = () =>
  onMessage(messaging, (payload) => {
    console.log("message received. ", payload);
  });
