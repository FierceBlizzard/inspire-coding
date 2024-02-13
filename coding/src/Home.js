import React from 'react';
import { signOut } from 'aws-amplify/auth';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { getCurrentUser } from 'aws-amplify/auth';

async function logout(){
    try{
        signOut();
    }catch(error){
        console.log(`error signing in ${error}`);
    }
}

async function currentUser(){
    try{
        const username = await getCurrentUser();
        console.log(username);
    }catch(err){
        console.log(err);
    }
}

function HomePage(){
    let user = currentUser();
    
    return(
        <div>
            <h1>Welcome Let's Inspire Coders</h1>
        </div>
    );
}

export default HomePage;