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
    justify-content: flex-start; /* Change to start to avoid pushing content too far down on small screens */
    overflow-x: hidden; /* Ensure no horizontal scroll */
    padding: 20px 0; /* Add some vertical padding */
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
    margin-top: 5%;
    animation: ${dropDown} 1s ease-in;
    h1 {
        font-size: 50px;
    }
    @media (max-width: 1200px) {
        h1 {
          font-size: 35px; /* Intermediate screen size adjustment */
          margin-top: 3vh; /* Example of using 'vh' for dynamic spacing */
        }
      }
    
      @media (max-width: 768px) {
        /* Adjust for tablets and larger phones */
        margin-top: 1vh; /* Example of using 'vh' for dynamic spacing */
        h1 {
          font-size: 30px; /* Smaller than 1200px but larger than the smallest size */
        }
      }
    
      @media (max-width: 576px) {
        padding: 15px;
        padding-top: 10px;
        margin: 15px 0; /* Adjusted margin for very small screens */
        h1 {
          margin-top: 3vh; /* Example of using 'vh' for dynamic spacing */
          font-size: 25px; /* Smallest screen size adjustment */
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

    padding: 20px;
    margin: 20px 0; /* Add some margin for spacing */
    
    @media (max-width: 576px) {
        padding: 15px;
        margin: 15px 0;
    }
`

export const ModernButton = styled.button`
  padding: 10px 20px; /* Slightly reduce padding for smaller screens */
  font-size: 16px; /* Adjust font size for better fit */
  
  /* Button styling */
  text-decoration: none;
  display: inline-block; /* To enable padding and margins */
  color: #FFFFFF; /* Text color */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent grey - Primary button color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease; /* Adds a smooth transition to the button */

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

  @media (max-width: 576px) {
    font-size: 14px;
    padding: 8px 15px;
  }
`

// Small / Landscape / Phones - @media (max-width: 576px)
// Medium / Tabets - @media (max-width: 768px)
// Large / Laptops - @media (max-width: 992px)
// XL / Dektops - @media (max-width: 1200px)
// XXL / Monitors - @media (max-width: 1400px)