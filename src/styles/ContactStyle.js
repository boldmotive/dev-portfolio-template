// ContactStyle.js
import styled, { keyframes } from 'styled-components';
import background from '../images/nyc-cityscape.png';

const dropDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100px)
    }
    70% {
        opacity: 0.2;
    }
    100% {
        opacity: 1;
        transform: translateY(0px)
    }
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    position: relative; // This is needed to position the pseudo-element correctly.
    z-index: 1; // Ensure container content is above the pseudo-background.

    // Adding a pseudo-element for the background
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${background}) no-repeat center center fixed;
        background-size: cover;
        opacity: 0.5; // Apply opacity only to the background
        z-index: -1; // Ensure the background is behind the content
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative; // Ensure form is positioned above the pseudo-background
  z-index: 2; // Higher than the pseudo-background
  animation: ${dropDown} 1s ease-in-out;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  height: 100px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer
`;
