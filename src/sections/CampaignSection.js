import * as React from 'react';
import styled from "styled-components"

const Maindiv = styled.div`
width:100%;
background-color:#272759;
padding-top:1rem;
padding-bottom:3rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
`;
const Heading = styled.h1`
font-size:3rem;
text-align:center;
color:#00d563;
@media (max-width:768px){
    font-size:2.2rem;
}
@media (max-width:576px){
    font-size:1.7rem;
}

`;
const Image = styled.img`
margin:auto;
margin-top:2rem;
max-width:78%;
height:auto;
position:relative;
@media (max-width:768px){
    margin-top:1.5rem;
}
@media (max-width:576px){
    margin-top:1rem;
}
`;
const SideCampaignHeading = styled.h2`
font-size: calc(12px + 2vw);
font-weight: 700;
transform: rotate(270deg);
position: absolute;
left: -110px;
bottom:37%;
translate:middle;
color:white;
margin-top:0px;
margin-bottom:0px;
@media (max-width:768px){
    left: -90px;
    font-size: calc(10px + 2vw);
}
@media (max-width:576px){
    left: -66px;
    font-size: calc(8px + 2vw);
}
`;
export default function CampaignSection() {
    return (
        <Maindiv>
            <Heading>Campaign Process</Heading>
            <Image src="./assets/images/Group 39.svg" alt="campaign"></Image>
            <SideCampaignHeading>
                👨 Best Campaign setup
            </SideCampaignHeading>
        </Maindiv>
    );
};