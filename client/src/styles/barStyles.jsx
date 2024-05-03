import styled from "styled-components";

const Bar = styled.div`
    display: flex;
    width: 96%;
    height: 3em;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    padding: 1% 2%;
    background-color: #FF7F50;
    border-top: ${props => (props.$border === "top" ? "3px solid black" : "none")};
    border-bottom: ${props => (props.$border === "bot" ? "3px solid black " : "none")};
`;

export default Bar;