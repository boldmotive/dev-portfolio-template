import styled, { keyframes } from 'styled-components';
import background1 from '../images/nyc-cityscape.png';
// import background2 from '../images/nyc-cityscape-grid.png';
import Slider from 'react-styled-carousel';

const dropDown = keyframes`
    from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
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

const fromRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100px)
    }
    70% {
        opacity: 0.2;
    }
    100% {
        opacity: 1;
        transform: translateX(0px)
    }
`



export const AboutMainContainer = styled.div`
    position: relative;
    height: 100vh;
    max-width: 100vw;
    display: flex;
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
        background: url(${background1}) no-repeat center center;
        background-size: cover;
        background-position: fixed;
        opacity: 0.5;
        z-index: -1;
    }
`

export const Section = styled.section`
  padding: 20px;
  margin: 20px 0;
`;


export const MultiColumnLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Column = styled.div`
  flex: 1; // Gives equal width to each column. Adjust as necessary.
  padding: 0 20px; // Adds some spacing between columns

  &:first-child {
    flex: 0 0 auto; // Keeps the headshot column width as per its content
    padding-left: 0;
  }
`;

// Container for the two columns
export const TwoColumnLayout = styled.div`
  display: flex;
  align-items: flex-start; // Align items at the start of the container
  gap: 20px; // Adds space between the two columns
  animation: ${fromLeft} 1.5s ease-in;

  p {
    font-size: 20px;
    text-align: left;
  }

    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1; // Ensure it's above the :after pseudo-element of the container

    h3 {
        font-size: 30px;
        color: white;
        text-align: center;
    }
`;

// Styled component for the left column (headshot)
export const HeadshotColumn = styled.div`
  flex: 1; // Takes up 1 portion of the space
  max-width: 35%; // Ensures it doesn't exceed half the parent's width
  animation: ${fromLeft} 1.5s ease-in;

  img {
    width: 85%; // Makes the image responsive
    height: auto; // Keeps the aspect ratio of the image
    align-self: center; // Aligns the image to the center of the column
    margin: 0 auto; // Centers the image within the column
    margin-left: 10%; // Adds a bit of space to the left of the image
  }

  @media (max-width: 1200px) {
        h3 {
            font-size: 25px;
        }
    }
  @media (max-width: 768px) {
        margin-top: 50px;
    }
  @media (max-width: 576px) {
        h3 {
            font-size: 15px;
        }
    }
`;

// Styled component for the right column (about section)
export const AboutColumn = styled.div`
  flex: 2; // Takes up 2 portions of the space, making it larger than the left column
  max-width: 65%; // Ensures it doesn't exceed half the parent's width
  margin-right: 10%; // Adds a bit of space to the right of the column
  color: white;
  animation: ${fromRight} 1.5s ease-in;

  @media (max-width: 1200px) {
        h3 {
            font-size: 25px;
        }
    }
  @media (max-width: 768px) {
        margin-top: 50px;
    }
  @media (max-width: 576px) {
        h3 {
            font-size: 15px;
        }
    }
  `;

  // If you're using styled-components, you might add something like this
export const StyledSlider = styled(Slider)`
    width: 100%; // Ensure it takes the full width of its container
    height: auto; // Adjust height based on content

    img {
        max-width: 100%; // Ensure images are not wider than the slider
        height: auto; // Maintain aspect ratio
    }
`;