import React, { useRef } from 'react';
import { signIn } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

async function login({username, password}){
    try{
        const { isSignedIn, nextStep } = await signIn({username, password});
    }catch(error){
        console.log(`error signing in ${error}`);
    }
}

function LoginForm(){
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;

            await login({username, password});
            navigate('/home');
        }catch(error){
            console.log("error signing up: ", error);
        }
    
    };

    return(
        <div>
            <h1>Login</h1>
            <form id="login" onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" ref={usernameRef}></input>
                <br></br>
                <label>Password: </label>
                <input type="password" ref={passwordRef}></input>
                <br></br>
                <button type="submit">Login</button>
            </form>
            <button onClick={() => navigate('/SignUp')}>Sign Up</button>
        </div>
    );
}

export default LoginForm;