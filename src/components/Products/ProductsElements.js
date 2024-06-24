import styled from "styled-components";

export const ProductContainer = styled.div`
width:100vw;
min-height:100vh;
padding:5rem calc((100vh-1300px)/2);
background:grey;
color:#fff;
`;

export const ProductWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto;
`;

export const ProductCard = styled.div`
margin:0 2rem;
line-height:2;
width:300px;
`;

export const ProductImg = styled.img`
height:300px;
min-width:300px;
max-width:100%;
box-shadow: -2px 0px 25px 1px rgba(255,0,0,0.67);
-webkit-box-shadow: -2px 0px 25px 1px rgba(255,0,0,0.67);
-moz-box-shadow: -2px 0px 25px 1px rgba(255,0,0,0.67);


`;

export const ProductsHeading = styled.h1`
font-size:clamp(2rem, 2.5vw, 3rem);
text-align:center;
margin-bottom:5rem;
`;

export const ProductTitle = styled.h2`
font-weight:400;
font-size:1.5rem;
`;

export const ProductInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding: 2rem;
text-align:center;
`;

export const ProductDesc = styled.p`
margin-bottom:1rem;
`;

export const ProductPrice = styled.p`
margin-bottom:1rem;
font-size:2rem;
`;

export const ProductButton = styled.button`
font-size:1.5rem;
padding:1rem 2rem;
border:none;
border-radius:8px;
background:red;
color:#000;
transition:0.2s ease-out;

&:hover{
  background:green;
  transition:0.2s ease-out;
  cursor:pointer;
  color:#fff;
}
`;