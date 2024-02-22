import styled, {keyframes} from 'styled-components';

const dropDown = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`

export const SkillsMainContainer = styled.div`
    display: flex;
    flex-direction: column; /* Stack children vertically */
    justify-content: center; /* Center children vertically in the container */
    align-items: center; /* Center children horizontally in the container */
    height: 100vh;
    max-width: 100vw;
`

export const SkillsIconContainer = styled.div`
    
    width: 100vw; /* Ensure it spans the full viewport width */
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: space-evenly;
    background-color: rgba(0,0,0,0.6);
    animation: ${dropDown} 1s ease-in-out;

    /* Consider adjustments needed to accommodate the 
    marquee behavior on smaller screens */
    overflow: hidden; /* Prevents horizontal scroll */
    padding: 0; /* Ensures icons are evenly spaced */
    margin: 0 auto; /* Centers the container */
`

export const SingleSkill = styled.div`
  cursor: pointer;
  font-size: 80px;
  color: white;
  justify-content: center; /* Center icons within the container */
  align-items: center; /* Vertically center */
  
  @media (max-width: 992px) { /* For tablets */
    font-size: 65px;
  }
  
  @media (max-width: 768px) { /* For smaller tablets and large phones */
    font-size: 55px;
  }
  
  @media (max-width: 576px) { /* For small phones */
    font-size: 40px;
  }
`

export const SkillsInformationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SkillsInformationWindow = styled.div`
  width: 80%;
  height: 80%;
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); /* Creates a responsive grid layout */
  grid-template-rows: 1fr 1fr;

  @media (max-width: 576px) {
    gap: 10px; /* Smaller gap for very small screens */
  }
`
export const SkillsBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  a {
    margin-bottom: 80px;
    font-size: 20px;
    color: black;
    text-decoration: none;
    transition: all .2s ease-in-out;
    text-align: center;
    &:hover {
      transform: scale(1.2);
    }
    @media (max-width: 768px) {
      font-size: 15px;
    }
    @media (max-width: 576px) {
    font-size: 10px;
    }
  }
`
export const Skill = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 60px;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`


// Small / Landscape / Phones - @media (max-width: 576px)
// Medium / Tabets - @media (max-width: 768px)
// Large / Laptops - @media (max-width: 992px)
// XL / Dektops - @media (max-width: 1200px)
// XXL / Monitors - @media (max-width: 1400px)