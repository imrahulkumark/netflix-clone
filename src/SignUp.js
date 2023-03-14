import React, { useRef } from 'react'
import "./css/login.css"
import { auth } from './firebase';
function SignUp() {
    const emailRef = useRef(null);
    const passswordRef = useRef(null);
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passswordRef.current.value
            ).then(authUser=>{
                console.log(authUser)
            })
    }

    const signIn = (e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passswordRef.current.value
        ).then(authUser=>{
            console.log(authUser)
        }).catch(error=>{
            alert(error.message)
        })
    }
    return (
        <div className="signUpScreen">
            <form>
             <h1>Sign In</h1>
             <input ref={emailRef} type="email" placeholder="Email"/>
             <input ref={passswordRef} type="password" placeholder="Passoword"/>
             <button onClick={signIn}>Sign In</button>

             <h4>New to Netflix <span onClick={register}>Sign Up Now.</span></h4>
            </form>
        </div>
    )
}

export default SignUp