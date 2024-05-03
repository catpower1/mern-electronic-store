import React from "react";
import styled from "styled-components";
import { CustomButton1 } from "../../styles/buttonStyles";
import { SignInUpStyles } from "../../styles/Layout";

const SignInButton = styled(CustomButton1)`
    margin: 0.5cm;
`;

function SignUp(){
    return(
        <SignInUpStyles>
            <span>User Name</span>
            <input type="text" placeholder="User Name"/>
            <span>Email</span>
            <input type="text" placeholder="Email"/>
            <span>Password</span>
            <input type="password" placeholder="Password" />
            <span>Repeat Password</span>
            <input type="password" placeholder="Repeat Password" />
            <SignInButton>Sign Up</SignInButton>
        </SignInUpStyles>
    );
}

export default SignUp;