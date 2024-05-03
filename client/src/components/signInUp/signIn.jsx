import React, { useState } from "react";
import { SignInUpStyles } from "../../styles/Layout";
import { CustomButton1 } from "../../styles/buttonStyles";
import styled from "styled-components";
import data from "../../config.json";
import tokenStore from "../../store/tokenStore";
import Alert from "./Alert";

const SignInButton = styled(CustomButton1)`
    margin: 0.5cm;
`;

function SignIn(){
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorText,setErrorText] = useState('');
    const setToken = tokenStore(state => state.setToken);

    async function handleLogin() {
        try {
            const response = await fetch(`https://${data.server.host}:${data.server.port}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username : userName,
                    password : password
                })
            });
    
            if (response.ok) {
                const token = await response.text();
                setToken(token);
            } 
            else if(response.status === 400){
                setError(true);
                setErrorText(await response.text());
                setTimeout(() => {
                    setError(false);
                }, 4000);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }


    }

    return(
        <SignInUpStyles $error={error}>
            { error && (<Alert level={"error"} message={errorText}/>) }
            <span>User Name</span>
            <input type="text" placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}/>
            <span>Password</span>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <SignInButton onClick={handleLogin}>Sign in</SignInButton>
        </SignInUpStyles>
    );
}

export default SignIn;