import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config={
  
    apiKey: "AIzaSyAHUtHYnfGQutrnOR9i38M48LdLwNbQUVI",
    authDomain: "peniel-clothing.firebaseapp.com",
    databaseURL: "https://peniel-clothing.firebaseio.com",
    projectId: "peniel-clothing",
    storageBucket: "peniel-clothing.appspot.com",
    messagingSenderId: "12753287710",
    appId: "1:12753287710:web:55ea473f381efcfb058c0f",
    measurementId: "G-ESLKS7LK80",
}

firebase.initializeApp(config);


export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);





export default firebase;
