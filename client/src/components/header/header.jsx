import React, { useEffect } from "react"
import SignInUpStore from "../../store/signInUpStore";
import Button from "../buttonComponent";
import Bar from "../../styles/barStyles";
import Search from "./search";
import Logo from "./logo";
import SignFrom from "../signInUp/signFrom";
import tokenStore from "../../store/tokenStore";
import UserPanel from "./userPanel";
import data from "../../config.json";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
`;

function Header(){
    const { setActive } = SignInUpStore();
    const { token } = tokenStore();
    const setToken = tokenStore(state => state.setToken);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://${data.server.host}:${data.server.port}/user/authenticate`, {
                    method: "GET",
                    credentials: "include"
                });
                if(res.status === 200){
                    const token = await res.text();
                    setToken(token);
                }
                else if(res.status === 403){
                    setToken(null);
                }
                
                
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }
        

        fetchData();
    }, []);

    const logout = async ()=>{
        await fetch(`https://${data.server.host}:${data.server.port}/user/logout`,{
            method: "GET",
            credentials: "include"
        })
        .then(setToken(""))
        .catch((error)=>console.log("logout error",error));
    }

        return(
            <Bar $border="bot">
                { token ? ("") : (<SignFrom/>) }
                <Logo/>
                <Search/>
                { token ? (<StyledDiv><UserPanel username={"test"}/><Button value="Logout" onClick={logout}/></StyledDiv>) : (<Button value="Sign In" onClick={setActive}/>) }
            </Bar>
        );
}
export default Header;