import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

import {} from './firebase.js'

const signupForm = document.querySelector('.contenedor_login-register');


signupForm.addEventListener('submit', async (e) =>
{
    e.preventDefault()

    const email =signupForm['signup-email'].value
    const password = signupForm['signup-password']

    console.log(email, password)

try
{
    const userCredential = await createUserWithEmailAndPassword (auth, email, password)
    console.log(userCredential)
} catch (error)
{
    console.log(error)
}
})