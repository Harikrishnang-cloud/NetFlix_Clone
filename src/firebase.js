import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword,
    signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAfbL-7TJ7g3Mc0TiMefEaP1xO055aCqK8",
  authDomain: "netflix-clone-fffd0.firebaseapp.com",
  projectId: "netflix-clone-fffd0",
  storageBucket: "netflix-clone-fffd0.firebasestorage.app",
  messagingSenderId: "1060493062997",
  appId: "1:1060493062997:web:66e82b00621a62565a75dc",
  measurementId: "G-KKNJMQSYC0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,

        })
    } catch (error) {
        console.log(error)
        alert(error)
    }
}
const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        alert(error)
    }
}
const logout = ()=>{
    signOut(auth)
}

export {
    auth,
    db,
    login,
    signup,
    logout
}