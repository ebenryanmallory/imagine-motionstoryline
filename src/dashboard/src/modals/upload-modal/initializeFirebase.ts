import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged } from "firebase/auth";
import { updateUserID } from '../../../store';

export async function initializeFirebase() {
    const url = `/firebase-credentials`
    const firebaseConfigResponse = await fetch(url);
    const firebaseConfig = await firebaseConfigResponse.json();
    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            updateUserID(user.uid);
        } else {
            updateUserID("");
        }
    });
    
    const feedback_selector = document.querySelector('#feedback') as HTMLElement;

    async function signInEmail() {
        const email = (document.querySelector('#email') as HTMLInputElement).value;
        const password = (document.querySelector('#password') as HTMLInputElement).value;
        await signInWithEmailAndPassword(auth, email, password).catch((error) => { 
            const errorMessage = error.message;
            feedback_selector.classList.remove('hidden');
            feedback_selector.innerText = `* ${errorMessage}`;
        });
    }
    // @ts-ignore
    window.signInEmail = signInEmail;
    async function signUpEmail() {
        const email = (document.querySelector('#email') as HTMLInputElement).value;
        const password = (document.querySelector('#password') as HTMLInputElement).value;
        await createUserWithEmailAndPassword(auth, email, password).catch((error) => { 
            const errorMessage = error.message;
            feedback_selector.classList.remove('hidden');
            feedback_selector.innerText = `* ${errorMessage}`;
        });
    }
    // @ts-ignore
    window.signUpEmail = signUpEmail;

    window.addEventListener("keydown", (event) => {
        if (event.key === 'Enter' && event.code === 'Enter') {
            const signInButton = document.querySelector('.sign-in') as HTMLButtonElement;
            if (signInButton.classList.contains('hidden')) {
                signUpEmail();
            } else {
                signInEmail();
            }
        }
    }, true);
}