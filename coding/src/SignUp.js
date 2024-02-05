import { signUp } from 'aws-amplify/auth';
import React, { useRef } from 'react';

async function handleSignUp({email, username, password}){
    try{
        const {isSignUpComplete, userId, nextStep} = await signUp({
            username,
            password,
            options: {
                email
            },
            autoSignIn: true
        });
        console.log(username);
    }catch(error){
        console.log("error singing up: ", error);
    }
}

function SignUpForm(){
    
    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const email = emailRef.current.value;
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;
            console.log(`${email}, ${username}`);
            await handleSignUp({email, username, password});
        }catch(error){
            console.log("error signing up: ", error);
        }
        
    };
    
    return(
    <div>
        <form id="sign-up" onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="email" ref={emailRef}></input>
            <br></br>
            <label>Username: </label>
            <input type="text" ref={usernameRef}></input>
            <br></br>
            <label>Password: </label>
            <input type="password" ref={passwordRef}></input>
            <br></br>
            <button type="submit">Sign Up</button>
        </form>
    </div>
    );
}

export default SignUpForm;