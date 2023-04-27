// import * as React from 'react';
import { useRef, useEffect } from 'react';
import styled from "styled-components";


import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';




const Maindiv = styled.div`
width:100%;
background-color:#00d563;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
overflow:hidden;
`;
const Contentdiv = styled.div`
width:50%;
padding-top:3rem;
padding-bottom:3rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media (max-width:576px){
    width:65%
}
`;
const Heading = styled.h2`
font-size: calc(20px + 2vw);
font-weight: 700;
color: #272759;
margin-top: 0;
margin-bottom: 0.5rem;
line-height: 1.2;
text-align:center;
`;
const Image = styled.img`
max-width:100%;
height:auto;
`;
const Paragraph = styled.p`
font-size: calc(11px + .5vw);
color: #272759;
text-align:center;
`;
const Contactform = styled.div`
background-color:black;
// display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:10px 25px;
display:none;
`;
const HeadingForm = styled.h2`
color:white;
text-align:center;
`;
const ParagraphForm = styled.p`
color:white;
`;
const Form = styled.form`
margin-bottom:10px;
`;
const Select = styled.select`
padding:7px 50px 7px 7px;
margin-right:10px;
border-radius:5px;
`;
const Option = styled.option``;
const SubmitButton = styled.button`
padding: 8px 20px;
background-color:rgb(71 183 198);
border-radius:5px;
`;
export default function ContactUsSection() {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);

    useEffect(() => {
        gsap.to(".mobile-scale", {
            scrollTrigger: {
                trigger: ".mobile-scale",
                pin:true,
                scrub: 1,
                start: "top center",
                end: "top 100",
                ease: "power2",
                markers: true
            },
            scale: 3
        });
        gsap.to(".mobile-scale", {
            yPercent: -90,
            opacity: 0,
            ease: "Power3.easeOut",
            stagger: 0.5,
            scrollTrigger: {
              trigger: ".mobile-scale",
              start: "top 100",
              end: "top 100",
              markers: true,
              scrub: 1,
              pin: true
            },
          });
        
    }, []);


    return (
        <Maindiv className="Maindiv" ref={ref}>
            <Contentdiv>
                <Heading>Drive Results,<br />
                    Maximize your ROI</Heading>
                <Paragraph>Strategizing, Designing, Optimizing and Managing
                    digital ad campaigns for businesses who wish
                    to thrive
                    in today’s market</Paragraph>
            </Contentdiv>
            <Image src="./assets/images/Group 37.svg" alt="contact us" className="mobile-scale" ></Image>
            <Contactform className='mobile-trigger'>
                <HeadingForm>Calculate the cost of your business setup</HeadingForm>
                <ParagraphForm>Choose your business category</ParagraphForm>
                <Form>
                    <Select>
                        <Option>Please select</Option>
                        <Option>1</Option>
                        <Option>2</Option>
                    </Select>
                    <SubmitButton type="submit">CONTINUE</SubmitButton>
                </Form>
            </Contactform>
        </Maindiv>
    );
};