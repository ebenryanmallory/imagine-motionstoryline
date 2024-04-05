import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { updateUserID } from '../../../store';

export async function initializeFirebase() {
    const url = `/firebase-credentials`
    const firebaseConfigResponse = await fetch(url);
    const firebaseConfig = await firebaseConfigResponse.json();
    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            updateUserID(user.uid)
        } else {
            updateUserID("")
        }
    });
    
    const feedback_selector = document.querySelector('#feedback');

    async function signInEmail() {
        // @ts-ignore
        const email = document.querySelector('#email').value;
        // @ts-ignore
        const password = document.querySelector('#password').value;
        const userCredential = await signInWithEmailAndPassword(auth, email, password).catch((error) => { 
            const errorMessage = error.message;
            // @ts-ignore
            feedback_selector.classList.remove('hidden');
            // @ts-ignore
            feedback_selector.innerText = `* ${errorMessage}`;
        });
        if (userCredential === undefined) { return }
        const user = userCredential.user;
        const db = getFirestore(app);
        const docRef = await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            uid: user.uid
        }, { merge: true });
    }
    // @ts-ignore
    window.signInEmail = signInEmail;
    async function signUpEmail() {
        // @ts-ignore
        const email = document.querySelector('#email').value;
        // @ts-ignore
        const password = document.querySelector('#password').value;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password).catch((error) => { 
            const errorMessage = error.message;
            // @ts-ignore
            feedback_selector.classList.remove('hidden');
            // @ts-ignore
            feedback_selector.innerText = `* ${errorMessage}`;
        });
        if (userCredential === undefined) { return }
        const user = userCredential.user;
        const db = getFirestore(app);
        const docRef = await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            uid: user.uid
        }, { merge: true });
    }
    // @ts-ignore
    window.signUpEmail = signUpEmail;
    window.addEventListener("keydown", (event) => {
        if (event.key === 'Enter' && event.code === 'Enter') {
            // @ts-ignore
            if (document.querySelector('.sign-in').classList.contains('hidden')) {
                signUpEmail();
            } else {
                signInEmail();
            }
        }
    }, true);
}