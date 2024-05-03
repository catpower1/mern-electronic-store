import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const StyledAlert = styled.div`
    position: fixed;
    top: 20px;
    left: 50%;
    width: 80%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: 3px solid ${({ $level }) => {
        switch($level){
            case "error":
                return "#C70039";
            case "warning":
                return "#f2f233";
            case "success":
                return "#5cc438";
            default:
                return "black";
        }
        
    }};
    color: black;
    font-size: 1.5em;
    font-weight: 500;
    animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.5s ease-in-out forwards;
`;

const Alert = ({ message, level }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
    }, 3000);
        return () => clearTimeout(timeout);
    }, []);
    return <StyledAlert $level={level} visible={isVisible}>{message}</StyledAlert>;
};

export default Alert;