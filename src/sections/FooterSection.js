import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import styled from "styled-components";


const Maindiv = styled.div`
background-color:black;
padding-top: 1rem;
padding-bottom: 1rem;
`;
const FooterInnerSection = styled.div`
width:100%;

`;
const Headinglogo = styled.div`
width:100%
display:flex;
flex-wrap:wrap;
`;
const Logo = styled.div`
width:20%;
display:flex;
`;
const Slogen = styled.div`
padding-left:1%;
`;
const Headingslogen = styled.h1``;
const HeadingSpan = styled.span`
font-size: calc(19px + 1vw);
color: white;
:last-child{
    color: rgb(202, 202, 0);
}
`;
const FooterContent = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
`;
const DukeMenu = styled.div`
width:23%;
display:flex;
flex-direction:column;
padding-left:1%;
@media (max-width:768px){
    width:49%;
}
@media (max-width:576px){
    width:98%;
    padding-left:2%;
}
`;
const BusinessSetup = styled.div`
width:24%;
@media (max-width:768px){
    width:50%;
}
@media (max-width:576px){
    width:98%;
    padding-left:2%;
}
`;
const DukeSocial = styled.div`
width:17%;
@media (max-width:768px){
    width:33%;
}
@media (max-width:576px){
    width:98%;
    padding-left:2%;
}
`;
const Info = styled.div`
width:16%;
@media (max-width:768px){
    width:33%;
    padding-left:1%;
}
@media (max-width:576px){
    width:98%;
    padding-left:2%;
`;
const Address = styled.div`
width:19%;
@media (max-width:768px){
    width:33%;
}
@media (max-width:576px){
    width:98%;
    padding-left:2%;
}
`;
const FooterMenuHeading=styled.h5`
color:rgb(108,117,125);
font-weight:bold;
font-size:1.25rem;
margin-top: 0;
margin-bottom: 0.5rem;
`;
const List=styled.li`
list-style:none;
margin-bottom:.25rem;
`;
const Unorderlist=styled.ul`
padding:0;
margin-top:0;
`;
const Link=styled.a`
text-decoration: none;
color:white;
&:hover{
    color: rgb(202, 202, 0);
}
`;
const Paragraph=styled.p`
color: white;
`;
const SocialIcon=styled.div``;
const SocialLinks=styled.a`
color: #272759;
font-size: 22px;
margin:.25rem;
&:hover{
    color:#00d563;
}
`;
export default function FooterSection() {
    return (
        <Maindiv>
            <FooterInnerSection>
                <Headinglogo>
                    <Logo></Logo>
                    <Slogen>
                        <Headingslogen>
                            <HeadingSpan>REACH FOR YOUR DREAMS.</HeadingSpan><br />
                            <HeadingSpan>CREATE YOUR LEGACY.</HeadingSpan>
                        </Headingslogen>
                    </Slogen>
                </Headinglogo>
                <FooterContent>
                    <DukeMenu>
                        <FooterMenuHeading >Duke</FooterMenuHeading>
                        <Unorderlist>
                            <List><Link href="">Home</Link></List>
                            <List><Link href="">About</Link></List>
                            <List><Link href="">Agents</Link></List>
                            <List><Link href="">Value-Added Services</Link></List>
                            <List><Link href="">Blog</Link></List>
                        </Unorderlist>
                    </DukeMenu>
                    <BusinessSetup>
                        <FooterMenuHeading >Business Setup</FooterMenuHeading>
                        <Unorderlist>
                            <List><Link href="">Pricing & Packages</Link></List>
                            <List><Link href="">Business Activities</Link></List>
                            <List><Link href="">DUQE Business Licences</Link></List>
                            <List><Link href="">Coast Calculator</Link></List>
                        </Unorderlist>
                    </BusinessSetup>
                    <Info>
                        <FooterMenuHeading >Info</FooterMenuHeading>
                        <Unorderlist>
                            <List><Link href="">Privacy Policy</Link></List>
                            <List><Link href="">Sitemap</Link></List>
                            <List><Link href="">Contact</Link></List>
                        </Unorderlist>
                    </Info>
                    <DukeSocial>
                        <FooterMenuHeading >Duqe</FooterMenuHeading>
                        <SocialIcon>
                            <SocialLinks href=""><FaFacebook /></SocialLinks>
                            <SocialLinks href=""><FaInstagram /></SocialLinks>
                            <SocialLinks href=""><FaYoutube /></SocialLinks>
                        </SocialIcon>
                    </DukeSocial>
                    <Address>
                        <FooterMenuHeading >Address</FooterMenuHeading>
                        <Paragraph>
                            Quarter Deck QE2, Mina Rashid P.O.Box 554789 Dubai, UAE
                        </Paragraph>
                    </Address>
                </FooterContent>
            </FooterInnerSection>
        </Maindiv>
    );
};