// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeDtjmr8FPkJqc61DkIoF2t03UoRF_BRk",
  authDomain: "recipe-tracker-90dd7.firebaseapp.com",
  projectId: "recipe-tracker-90dd7",
  storageBucket: "recipe-tracker-90dd7.appspot.com",
  messagingSenderId: "145280700158",
  appId: "1:145280700158:web:20f9089b25458d1e1f1faf",
  measurementId: "G-K5FD503B6N",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function getRecipes() {
  // utilizes the useEffect hook to fetch existing database items and update the state based on response

  const q = query(collection(db, "recipe-tracker"));
  return getDocs(q).then((querySnap) => {
    return querySnap.docs.map((snap) => {
      return { ...snap.data(), id: snap.id };
    });
  });
}



export function getRecipe(id) {
    // reaches out and grabs the ID of a recipe and returns it to the details page
  
    const docRef = doc(db, "recipe-tracker", id);
    
    return getDoc(docRef).then((querySnap) => {
      return querySnap.data();
      });
  }

export async function addRecipe(value) {
  //adds items to the database
  const docRef = await addDoc(collection(db, "recipe-tracker"), { value });
  return docRef.id;
}
