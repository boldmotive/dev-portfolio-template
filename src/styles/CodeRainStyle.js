import styled, { keyframes, css, createGlobalStyle } from 'styled-components';
import background from '../images/nyc-cityscape.png';

const codeRain = keyframes`{
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }
`
// Animation for the falling code
const fallAnimation = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(100%); }
`;

// Container for the code rain effect
export const CodeRainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1; /* Behind everything, but after the webpage itself */
  background-color: #000;
  /* border: 2px solid red; Temporary for debugging */
  // animation: ${codeRain} 10s linear infinite;

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

// Individual line of code
export const CodeLine = styled.div`
  position: absolute;
  top: -100%; /* Start above the screen */
  left: ${props => props.leftOffset}vw;
  color: #56f940;
  font-family: 'Courier New', monospace;
  white-space: nowrap;
  animation: ${fallAnimation} linear infinite;
  animation-duration: ${props => props.duration}s;
  font-size: 16px;
`;

export const GlobalStyle = createGlobalStyle`
  @keyframes fall {
    to { transform: translateY(${window.innerHeight}px); }
  }
`;