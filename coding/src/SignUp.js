import React, { useRef } from 'react';
import { signUp } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

async function handleSignUp({email, username, password}){
    try{
        const {isSignUpComplete, nextStep} = {username, password} = await signUp({
            username,
            password,
            options: {
                userAttributes:{
                    email,
                    username
                }
            }
        });
    }catch(error){
        console.log("error singing up: ", error);
    }
}


function SignUpForm(){
    
    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const email = emailRef.current.value;
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;

            await handleSignUp({email, username, password});
            console.log(username);
            navigate('/home');
        }catch(error){
            console.log("error signing up: ", error);
        }
        
    };
    
    return(
    <div>
        <h1>Sign Up Form</h1>
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