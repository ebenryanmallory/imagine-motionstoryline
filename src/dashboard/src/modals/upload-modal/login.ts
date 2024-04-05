import { state, onChange } from '../../../store';
import { initializeFirebase } from "./initializeFirebase";

const setupEventListeners = () => {
    const loginSection = document.querySelector('.login') as HTMLElement;
    const uploadAllButton = document.querySelector('#uploadAllButton') as HTMLButtonElement;
    onChange('userID', (newValue: string) => {
        newValue === "" ? loginSection.classList.remove('hidden') : loginSection.classList.add('hidden');
        uploadAllButton.disabled = newValue === "" ? true : false;
    });
};

export const login = () => { 
    
    setTimeout(() => {
        initializeFirebase();
        setupEventListeners();
    }, 0);

    return /*html*/`
    <div class="flex items-center justify-center login">
        <div class="text-center max-w-md w-full py-10 px-6">
            <div class="login-form ${state.userID === "" ? '' : 'hidden'}">
                <form>
                    <input id="email" aria-label="Email address" name="email" type="email" required="" class="uk-input text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 text-sm mb-4 focus:border-gray-500 focus:ring-gray-500 focus:outline-none" placeholder="Email address" value="">
                    <input id="password" aria-label="Password" name="password" type="password" required="" class="mt-5 uk-input text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 text-sm mb-6 focus:border-gray-500 focus:ring-gray-500 focus:outline-none" placeholder="Password">
                </form>
                <button onclick="signInEmail()" class="sign-in uk-button background:hover[#546c89] relative primary-bg mt-5 w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-10 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50" style="text-transform: none; height: 40px; line-height: 20px;">
                    <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 8px; left: 20px; fill: #FFFFFF"  height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                    Sign in to account
                </button>
                <button onclick="signUpEmail()" class="sign-up hidden background:hover[#546c89] relative uk-button primary-bg mt-5 w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm mb-10 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50" style="text-transform: none; height: 40px; line-height: 20px;">
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
`};