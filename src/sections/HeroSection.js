// @flow
// import { hover } from '@testing-library/user-event/dist/hover';
import * as React from 'react';
import styled from 'styled-components';

const Maindiv = styled.div`
position:relative;
margin-bottom:-5px;
`;
const Image = styled.img`
max-width:100%;
height:auto;

`;
const Rightdiv = styled.div`
position:absolute;
top:0;
right:0;
width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
margin-right:3rem;

@media (max-width:768px){
  margin-right:1.5rem;
}
@media (max-width:576px){
  margin-right:.5rem;
}
`;
const Contentdiv = styled.div`
margin-top:10px;
`;
const Heading = styled.h1`
font-size:3.5em;
color:white;
font-weight:500;
margin:0;
margin-bottom:1rem;
padding-bottom:.5rem;
font-family: 'Poppins', sans-serif;
line-height: 3rem;
transform: scale(1,1.7);
text-shadow:0 0 2px white;
@media (max-width:768px){
  font-size:2.4em;
  line-height: 2.4rem;
  margin-bottom:.8rem;
  padding-bottom:.4rem;
}
@media (max-width:576px){
  font-size:1.3em;
  line-height: 1rem;
  margin-bottom:.5rem;
  padding-bottom:.3rem;
}
`;
const P = styled.p`
font-size:16px;
color:white;
padding-top:10px;
margin-bottom:25px;
font-family: 'Poppins', sans-serif;
@media (max-width:768px){
  font-size:12px;
  margin-bottom:12px;
  padding-top:8px;
}
@media (max-width:576px){
  font-size:8px;
  margin-bottom:7px;
  padding-top:6px;
  margin-top:0;
}
`;
const Span = styled.span`
color:#00D563;
text-shadow:0 0 10px #00d563;
`;
const Button = styled.button`
padding:10px;
color:white;
background-color:transparent;
border:1px solid #00D563;
font-family: 'Poppins', sans-serif;
&:hover {
  color: black;
  background-color:#00D563; 
}
&:active{
  background-color:#00D56399;
  box-shadow:0 0 2px black;
  border:1px solid white;
  color:white;
}
@media (max-width:768px){
  font-size:12px;
  padding:9px;
}
@media (max-width:576px){
  font-size:9px;
  padding:8px;
}
`;

export default function HeroSection() {

  return (
    <Maindiv>
      <Image src='../assets/images/Group 26.svg' alt='digital marketing'></Image>
      <Rightdiv>
        <Contentdiv>
          <Heading><Span>DIGITAL</Span><br />MARKETING</Heading>
          <P>UAE'S VISION COMBINED WITH GERMAN PRECISION <br />
            —THE GOLD STANDARD TO GROW BUSINESS.</P>
          <Button>REQUEST A FREE QUOTE</Button>
        </Contentdiv>
      </Rightdiv>
    </Maindiv>
  );

};