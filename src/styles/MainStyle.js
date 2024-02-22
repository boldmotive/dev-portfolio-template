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
const fromLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px)
    }
    70% {
        opacity: 0.2;
    }
    100% {
        opacity: 1;
        transform: translateX(0px)
    }
`
// const fromRight = keyframes`
//     0% {
//         opacity: 0;
//         transform: translateX(100px)
//     }
//     70% {
//         opacity: 0.2;
//     }
//     100% {
//         opacity: 1;
//         transform: translateX(0px)
//     }
// `

// const fadeIn = keyframes`
//     0% {
//         opacity: 0;
//     }
//     100% {
//         opacity: 1;
//     }
// `

export const HomeMainContainer = styled.div`
    position: relative;
    height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column; /* Ensures content is stacked vertically */
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */
    overflow: hidden;
    // border: 2px solid red; /* Temporary for debugging */
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${background}) no-repeat center center;
        background-size: cover;
        opacity: 0.5;
        z-index: -1;
    }
`

export const WelcomeHeader = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 10%;
    animation: ${dropDown} 1s ease-in;
    h1 {
        font-size: 50px;
    }
    @media (max-width: 1200px) {
        h1 {
            font-size: 35px;
        }
    }
    @media (max-width: 576px) {
        h1 {
            font-size: 25px;
        }
    }
`
export const WelcomeText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fromLeft} 1.5s ease-in;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1; // Ensure it's above the :after pseudo-element of the container

    h3 {
        font-size: 30px;
        color: white;
        text-align: center;
    }
`

export const ModernButton = styled.button`
  padding: 15px 30px; /* Increased padding */
  font-size: 18px; /* Increased font size */
  color: #FFFFFF;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent grey - Primary button color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9); /* Darker shade on hover */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* Adds shadow */
    transform: scale(1.05); /* Slightly increase the button size */
  }

  &:active {
    background-color: #004085; /* Even darker shade when active/clicked */
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19); /* Smaller shadow for a "pressed" effect */
    transform: scale(0.95); /* Slightly decrease the button size to mimic pressing down */
  }

  &:focus {
    outline: none; /* Removes the outline to keep the modern aesthetic */
  }

  &:disabled {
    background-color: #0056b3;
    cursor: not-allowed;
  }
`

// Small / Landscape / Phones - @media (max-width: 576px)
// Medium / Tabets - @media (max-width: 768px)
// Large / Laptops - @media (max-width: 992px)
// XL / Dektops - @media (max-width: 1200px)
// XXL / Monitors - @media (max-width: 1400px)