// import * as React from 'react';
import { useRef, useEffect } from 'react';
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";


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
// scale:.7;
`;
const Paragraph = styled.p`
font-size: calc(11px + .5vw);
color: #272759;
text-align:center;
`;
const Contactform = styled.div`
width:100%;
background-color:black;
// display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:10px 25px;
// display:none;
opacity:0;
`;
const HeadingForm = styled.h1`
font-family: 'Poppins', sans-serif;
color:white;
text-align:center;
margin-top:2rem;
margin-bottom:2rem;
`;
const ParagraphForm = styled.p`
font-family: 'Poppins', sans-serif;
color:white;
text-align:center;
margin-bottom:1.7rem;
`;
const Form = styled.form`
margin-bottom:10px;
text-align:center;
display:flex;
align-items:center;
justify-content:center;
`;
const Select = styled.select`
font-family: 'Poppins', sans-serif;
font-size:13px;
padding:6px 130px 6px 10px;
margin-right:10px;
border-radius:6px;
`;
const Option = styled.option``;
const SubmitButton = styled.button`
font-family: 'Poppins', sans-serif;
padding: 8px 30px;
background-color:rgb(71 183 198);
border-radius:6px;
display:flex;
align-items:center;
justify-content:center;
gap:5px;
`;
export default function ContactUsSection() {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 800px)", () => {
            // desktop setup code here...
            gsap.to(".mobile-scale", {
                scrollTrigger: {
                    trigger: ".mobile-scale",
                    pin: true,
                    scrub: true,
                    start: "top center",
                    end: "top 100",
                    ease: "power2",
                    markers: true,
                    toggleActions: "play reverse play reverse"
                },
                scale: 3
            });
            gsap.to(".mobile-scale", {
                opacity: 0,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: ".mobile-scale",
                    start: "center 100",
                    end: "center 100",
                    markers: true,
                    scrub: true,
                },
            });
            gsap.to(".Maindiv", {
                scrollTrigger: {
                    trigger: ".mobile-scale",
                    start: "top center",
                    end: "center 100",
                    markers: true,
                    scrub: true,
                    //   pin: true
                },
                backgroundColor: 'black',
            });
            gsap.to(".contact-form", {
                yPercent: -150,
                opacity: 1,
                ease: "Power2.easeIn",
                stagger: 0.5,
                scrollTrigger: {
                    trigger: ".mobile-scale",
                    start: "center bottom",
                    end: "center center",
                    // markers: true,
                    scrub: true,
                    toggleActions: "play reverse play reverse"
                    //   pin: true
                },
            });
        });

        mm.add("(max-width: 799px)", () => {
            // mobile setup code here...
            gsap.to(".mobile-scale", {
                scrollTrigger: {
                    trigger: ".mobile-scale",
                    pin: true,
                    scrub: true,
                    start: "top center",
                    end: "top 100",
                    ease: "power2",
                    // markers: true,
                    // toggleActions: "play reverse play reverse"
                },
                scale: 1.5
            });
            gsap.to(".mobile-scale", {
                opacity: 0,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: ".mobile-scale",
                    start: "center 100",
                    end: "center 100",
                    // markers: true,
                    scrub: true,
                },
            });
            gsap.to(".Maindiv", {
                scrollTrigger: {
                    trigger: ".mobile-scale",
                    start: "top center",
                    end: "center 100",
                    // markers: true,
                    scrub: true,
                    //   pin: true
                },
                backgroundColor: 'black',
            });
            gsap.to(".contact-form", {
                yPercent: -100,
                opacity: 1,
                ease: "Power2.easeIn",
                stagger: 0.5,
                scrollTrigger: {
                    trigger: ".mobile-scale",
                    start: "center bottom",
                    end: "center center",
                    // markers: true,
                    scrub: true,
                    toggleActions: "play reverse play reverse"
                    //   pin: true
                },
            });
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
            <Contactform className='contact-form'>
                <HeadingForm>Calculate the cost of your business setup.</HeadingForm>
                <ParagraphForm>Choose your business category</ParagraphForm>
                <Form>
                    <Select>
                        <Option>Please select</Option>
                        <Option>1</Option>
                        <Option>2</Option>
                    </Select>
                    <SubmitButton type="submit">CONTINUE <FaArrowRight /></SubmitButton>
                </Form>
            </Contactform>
        </Maindiv>
    );
};