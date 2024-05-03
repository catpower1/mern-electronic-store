import { styled } from "styled-components"; 

const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    visibility: ${props => (props.$toggle === true ? "visible" : "hidden")};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
`;

export const SignInUpStyles = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    & > input{
        width: 80%;
        height: 0.5cm;
        margin: 0.5cm 0;
        border: 3px solid black;
    }
    & > input:focus{
        outline: 0;
    }
    
    & > span{
        font-size: 1em;
        font-weight: 600;
    }
`;

export default Layout;