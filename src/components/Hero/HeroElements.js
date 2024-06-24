import styled from "styled-components";

import ImBg from '../../images/pizza-realistic-ad-photographydark-tone-uhd-qualityfire-on-background-miki-asai-macro-photograp-417116766.png';
export const HeroContainer = styled.div`
background:linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),
url(${ImBg});
height:100vh;
`;

export const HeroContent = styled.div`
height:calc(100vh-80px);
max-height:100%;
width:100vw;
padding:0rem calc((100vw-1300px)/2);
`;

export const HeroItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:100vh;
max-height:100%;
padding:0 2rem;
width:650px;
color:#fff;
line-height:1;
text-transform:uppercase;
font-weight:bold;

@media screen and(max-width:650px) {
  width:100%;
}
`;

export const HeroH1 = styled.h1`
font-size:clamp(2.5rem, 7vw, 5rem);
margin-bottom:0.8rem;
box-shadow:3px 3px orange;
letter-spacing:2px;
`;

export const HeroP = styled.p`
font-size:clamp(1rem, 1.5vw, 1rem);
margin-bottom:2rem;
`;

export const HeroBtn = styled.button`
font-size:1.5rem;
padding:1rem 4rem;
border:none;
color:#fff;
background:red;
transition:0.3s ease-out;

&:hover{
  background:green;
  transition:0.3s ease-out;
  cursor:pointer;
  color:#000;
}
`;
