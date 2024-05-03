import React, { useState } from "react";
import Layout from "../../styles/Layout";
import SignInUpStore from "../../store/signInUpStore";
import styled from "styled-components";
import SignIn from "./signIn";
import SignUp from "./signUp";

const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    height: 1cm;
    & > button{
        flex:1;
        background-color: #FFF5EE;
        outline: 0;
        border: 0;
        font-size: 1em;
        font-weight: 600;
    }
    & button:first-child{
        border-right: 3px solid black;
        border-bottom: ${props => (props.$toggletab === false ? "3px solid black" : "3px solid #FFF5EE")};
    }
    & button:nth-child(2){
        border-bottom: ${props => (props.$toggletab === true ? "3px solid black" : "3px solid #FFF5EE")};
    }
`;

export const SignInUpFormDiv = styled.div`
    display: flex;
    background-color: #FFF5EE;
    flex-direction: column;
    justify-content: flex-start;
    width: 12cm;
    border: 3px solid black;
    z-index: 3;
`;

const SignInUpFormContainer = styled.div`
    overflow: hidden;
    height: ${props => props.tab ? '6.5cm' : '11cm'}; 
    transition: height 0.5s ease;
`;

function SignForm(){
    const { setInactive, isActive } = SignInUpStore();
    const [ tab, toggleTab ] = useState(true);

    return (
        <Layout $toggle={isActive} onClick={setInactive}>
            <SignInUpFormDiv onClick={(e)=>e.stopPropagation()}>
                <Tabs $toggletab={tab}>
                    <button onClick={()=> toggleTab(true)}>Sign In</button>
                    <button onClick={()=> toggleTab(false)}>Sign Up</button>
                </Tabs>
                
                <SignInUpFormContainer tab={tab}>
                    {tab ? <SignIn /> : <SignUp />}
                </SignInUpFormContainer>
            </SignInUpFormDiv>
        </Layout> 
    );
}

export default SignForm;