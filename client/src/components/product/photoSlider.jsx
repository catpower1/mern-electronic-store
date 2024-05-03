import React, { useState } from "react";
import styled from "styled-components";

const SlideshowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 17cm;
    height: 10cm;
    border: 3px solid black;

`;
const SliderButtons = styled.button`
    width: 1cm;
    height: 1cm;
    border: 3px solid black; 
    background-color: #FFF5EE;
    border-right: ${props => props.$border === "right" ? '3px solid black' : '#FFF5EE'};
    border-left: ${props => props.$border === "left" ? '3px solid black' : '#FFF5EE'};
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
`;

const Img = styled.img`
    position: relative;
    width: auto; 
    height: auto; 
    max-width: 80%;
    max-height: 80%;
`

function PhotoSlider({ images }) {
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <SlideshowContainer>
            {
                images === undefined ? (<div>Loading...</div>):(
                    <>
                        <SliderButtons $border="right" onClick={()=>setSlideIndex(slideIndex === 0 ? (images.length - 1) : (slideIndex - 1))}>{"<"}</SliderButtons>
                            <Img src={images[slideIndex]} alt="no photo"/>
                        <SliderButtons $border="left" onClick={()=>setSlideIndex(slideIndex === (images.length - 1) ? 0 : (slideIndex +  1))} >{">"}</SliderButtons>
                    </>
                )
            }
        </SlideshowContainer>
    );
}

export default PhotoSlider;
