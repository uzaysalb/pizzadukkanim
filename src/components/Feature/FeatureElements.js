import styled from "styled-components";
import FeaturePic from "../../images/a-restaurant-on-a-hillside-with-stars-in-the-night-sky-794194625.png";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(2rem, 3vw, 5rem);
  }
  p {
    font-size: clamp(2rem, 1vw, 4rem);
    margin-top: 1rem;
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  background: red;
  color: #000;
  transition: 0.3s ease-in-out;
  border: none;
  border-radius: 14px;
  font-weight: bold;
  margin-top: 0.5rem;

  &:hover {
    background: green;
    color: #fff;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;
