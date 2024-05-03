import React, { useState } from "react";
import styled from "styled-components";
import CategoryStore from "../../store/categoryStore";

const Element = styled.li`
    display: flex;
    height: 1cm;
    border-bottom: 1px #F89880 solid;
    cursor: pointer;
    &:hover{
        background-color: #FBCEB1;
    }
    & > span{
        font-size: 1.2rem;
        font-weight:600;
        margin-left: 10px;
    }
    background-color: ${props => props.active ? '#F89880' : 'initial'};
    transition: background-color 0.3s ease;
`;

function CategotyElement({ title }) {
    const [isActive, setActive] = useState(false);
    const categories = CategoryStore(state => state.categories);
    const addCategory = CategoryStore(state => state.add);
    const removeCategory = CategoryStore(state => state.remove);

    const toggleActive = () => {
        setActive(prev => !prev);
        if (!categories.includes(title)){
            addCategory(title);
        } 
        else{
            removeCategory(title);
        }
    }

    return (
        <Element active={isActive} onClick={toggleActive}>
            <span>{title}</span>
        </Element>
    );
}
export default CategotyElement;