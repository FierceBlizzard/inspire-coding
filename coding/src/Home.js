import React from 'react';
import { signOut } from 'aws-amplify/auth';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { fetchUserAttributes } from 'aws-amplify/auth';

async function logout(){
    try{
        signOut();
    }catch(error){
        console.log(`error signing in ${error}`);
    }
}

async function currentUser(){
    try{
        const userAttributes = await fetchUserAttributes();
        console.log("userData");
        console.log(userAttributes);
        return userAttributes;
    }catch(err){
        console.log(err);
    }
}

function HomePage(){
    let userData = currentUser();
    console.log(userData);
    return(
        <div>
            <h1>Welcome Let's Inspire Coders</h1>
        </div>
    );
}

export default HomePage;