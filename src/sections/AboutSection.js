// import {Group31} from "../../public/assets/images/Group 31.svg";
import * as React from 'react';
import styled from 'styled-components';


const Maindiv = styled.div`
width:100%;
display:flex;
flex-wrap: wrap;
position:relative;
`;
const Leftdiv = styled.div`
width:50%;
background-color:#00D563;
padding-top:3rem;
padding-bottom:3rem;
overflow:hidden;
@media (max-width:768px){
    width:100%;
    padding-top:1rem;
padding-bottom:1rem;
}
`;
const Rightdiv = styled.div`
width:50%;
background-color:#19194B;
padding-top:3rem;
padding-bottom:3rem;
overflow:hidden;
@media (max-width:768px){
    width:100%;
    position:relative;
    padding-top:.5rem;
    padding-bottom:.5rem;
}
`;
const LeftContent = styled.div`
margin: calc(30px + 1vw);
margin-left: calc(10px + 1vw);
margin-right: calc(75px + 10vw);
color:white;
@media (max-width:768px){
    margin: calc(10px + 1vw);
    margin-right: calc(25px + 10vw);
}
`;
const H2 = styled.h2`
border: 1px solid white;
font-size: calc(8px + .75vw);
font-weight: 700;
padding: calc(12px + 0.1vw);
border-radius: 10px;
margin-right: calc(-50px - 1vw);
margin-bottom: calc(12px + 1vw);
margin-left: calc(10px + 1vw);
@media (max-width:768px){
    margin-right: 0;
}
`;
const Li = styled.li`
margin-bottom: calc(12px + 1vw);
font-size: calc(8px + .35vw);
@media (max-width:768px){
    font-size: calc(11px + .35vw);
}
`;
const Strong = styled.strong`
font-size: calc(8px + .7vw);
`;
const RightContent = styled.div`
text-align: right;
margin: calc(30px + 1vw);
margin-right: calc(20px + 1vw);
margin-left: calc(100px + 2vw);
`;
const HeadingRight=styled.h1`
display:flex;
flex-direction:column;
margin-bottom: calc(12px + 1vw);
color: #00d563;
// position: relative;
`;
const Headings=styled.p`
font-size: calc(12px + 1vw) !important;
font-weight: 500;
line-height: 150%;
margin: 0;
&.headingwhite{
    color:white;
}
`;
const UnorderedListRight=styled.ul`
text-align:right;
padding-right: 20px;
`;
const Rigghtlist=styled.li`
direction:rtl;
margin-bottom: calc(12px + 0.5vw);
font-size: calc(10px + .55vw);
// position: relative;
padding-right: 5px;
color:white;
`;
const HamzaCenterImage=styled.img`
position:absolute;
height: 110%;
top: 45%;
left: 50%;
transform:translate(-50%, -50%);
@media (max-width:768px) {
    height: 110%;
    top: 46%;
    left: 30%;
}
`;
export default function AboutSection() {
    return (
        <Maindiv>
            <Leftdiv>
                <LeftContent>
                    <H2>
                        OVER 6 YEARS OF COLLECTIVE MARKETING EXPERIENCE
                    </H2>
                    <ul>
                        <Li>
                            <Strong>GET MORE TRAFFIC</Strong><br />
                            Drive the right traffic to your website
                            for better audience engagement.
                        </Li>
                        <Li>
                            <Strong>HELP ME CONVERT</Strong><br />
                            The right audience will engage with
                            your website and explore what you
                            have to say.
                        </Li>
                        <Li>
                            <Strong>LOYALTY ALL THE WAY</Strong><br />
                            A well optimized website will enable
                            users to keep visiting your website to
                            know more.
                        </Li>
                        <Li>
                            <Strong>DELIGHTFUL ENGAGEMENT</Strong><br />
                            Being the most visible brand in your
                            industry is a might competitive
                            advantage you shouldn't miss out on
                        </Li>
                    </ul>
                </LeftContent>
            </Leftdiv>
            <Rightdiv>
                <RightContent>
                    <HeadingRight>
                        <Headings>Build and</Headings>
                        <Headings>Grow your</Headings>
                        <Headings>Brand,</Headings>
                        <Headings className='headingwhite'>THE RIGHT WAY</Headings>
                    </HeadingRight>
                    <UnorderedListRight>
                        <Rigghtlist>Graphic Designing</Rigghtlist>
                        <Rigghtlist>Strategy Consulting</Rigghtlist>
                        <Rigghtlist>Social Media Marketing</Rigghtlist>
                        <Rigghtlist>Pay-Per-Click Advertising</Rigghtlist>
                        <Rigghtlist>Search Engine Optimization</Rigghtlist>
                        <Rigghtlist>Augment Resource Management</Rigghtlist>
                    </UnorderedListRight>
                </RightContent>
                <HamzaCenterImage src="./assets/images/Group 31.svg" alt='hamza'></HamzaCenterImage>
            </Rightdiv>
            
        </Maindiv>
    )
}