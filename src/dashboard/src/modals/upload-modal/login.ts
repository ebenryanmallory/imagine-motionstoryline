import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { baseURL } from "../../universal/global";

async function initializeFirebase() {
    const url = `${baseURL}/firebase-credentials`
    const firebaseConfigResponse = await fetch(url);
    const firebaseConfig = await firebaseConfigResponse.json();
    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const loginSection = document.querySelector('.login') as HTMLElement;
            loginSection.classList.add('hidden');
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
        sessionStorage.setItem("MotionstorylineID", user.uid || docRef.id);
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
        sessionStorage.setItem("MotionstorylineID", user.uid || docRef.id);
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
initializeFirebase();

export const login = () => { 
    setTimeout(() => initializeFirebase(), 0);
    return /*html*/`
    <div class="flex items-center justify-center login">
        <div class="text-center max-w-md w-full py-10 px-6">
            <div class="login-form">
                <form>
                    <input id="email" aria-label="Email address" name="email" type="email" required="" class="uk-input text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 text-sm mb-4 focus:border-gray-500 focus:ring-gray-500 focus:outline-none" placeholder="Email address" value="">
                    <input id="password" aria-label="Password" name="password" type="password" required="" class="mt-5 uk-input text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 text-sm mb-6 focus:border-gray-500 focus:ring-gray-500 focus:outline-none" placeholder="Password">
                </form>
                <button onclick="signInEmail()" class="uk-button sign-in relative primary-bg mt-5 w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-10 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50" style="text-transform: none; height: 40px; line-height: 20px;">
                    <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 8px; left: 20px; fill: #FFFFFF"  height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                    Sign in to account
                </button>
                <button onclick="signUpEmail()" class="hidden sign-up relative uk-button primary-bg mt-5 w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-10 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50" style="text-transform: none; height: 40px; line-height: 20px;">
                    <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 8px; left: 20px; fill: #FFFFFF"  height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                    Sign up
                </button>
                <br />
                <div id="feedback" class="hidden"></div>
                <p class="sign-in cursor-pointer" onclick="this.parentNode.querySelectorAll('.sign-in').forEach(sign_in => sign_in.classList.toggle('hidden'));this.parentNode.querySelectorAll('.sign-up').forEach(sign_up => sign_up.classList.toggle('hidden'));">
                    Don't have an account? Sign Up
                </p>
                <p class="sign-up hidden cursor-pointer" onclick="this.parentNode.querySelectorAll('.sign-in').forEach(sign_in => sign_in.classList.toggle('hidden'));this.parentNode.querySelectorAll('.sign-up').forEach(sign_up => sign_up.classList.toggle('hidden'));">
                    Already have an account? Sign In
                </p>
            </div>
        </div>
    </div>
    <style>
        button.sign-in:hover { background: #546c89; }
        button.sign-up:hover { background: #546c89; }
    </style>
`};