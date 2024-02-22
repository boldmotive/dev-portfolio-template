import styled, { keyframes } from 'styled-components';

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

export const ProjectsMainContainer = styled.div`
    position: relative; /* Establishes a new stacking context */
    z-index: 2; /* Higher than CodeRain's z-index */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fromLeft} 1s ease-in-out;
`

export const ProjectsWindowDisplay = styled.div`
    position: relative; /* May not be necessary, but ensures stacking context */
    z-index: 3; /* Ensures it's above CodeRain */
    display: grid;
    background-color: grey;
    color: white;
    border-radius: 10px;
    box-shadow: 15px 15px 15px #f5f5f5;
    grid-template-columns: 3fr 1fr;
    // grid-template-rows: 2fr 3fr 1fr;
    width: 70%;
    height: auto;
    margin: 140px 0 80px 0;
    padding: 25px;

    @media (max-width: 1400px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 2fr 1fr;
        padding-top: 40px;
    }

    @media (max-width: 1200px) {
        grid-template-rows: 1fr 1fr 1fr;
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        padding: 40px;
        margin: 100px 0 0 0;
        grid-template-rows: 1fr auto 1fr;
    }

    @media (max-width: 420px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        padding: 10px;
    }
`
export const ProjectsWindowImage = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 80px 0 0;
    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 5px 5px 10px black;
        transition: all .2s ease-in-out;
        &:hover {
            transform: scale(1.02);
            box-shadow: 10px 10px 10px black;
        }
    }
    @media (max-width: 1400px) {
        grid-row-start: 2;
        grid-row-end: 4;
    }
    @media (max-width: 1200px) {
        grid-row-start: auto;
	    grid-row-end: auto;
	    grid-column-start: 1;
        grid-column-end: 3;
        margin: 0;
    }

    @media (max-width: 576px) {
        margin: 0;
        padding: 0;
    }
    @media (max-width: 420px) {
        grid-row-start: auto;
	    grid-row-end: auto;
	    grid-column-start: auto;
        grid-column-end: auto;
    }
`
export const ProjectsWindowHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 5px 0 0;
    text-align: center;
    h1 {
        font-size: 25px;
        @media (max-width: 1400px) {
            padding-bottom: 10px;
        }
        @media (max-width: 576px) {
            padding: 15px 0 0 0;
        }
        @media (max-width: 420px) {
            padding-top: 10px;
        }
    }
    p {
        font-size: 15px;
        @media (max-width: 576px) {
        font-size: 13px;
        }
        @media (max-width: 420px) {
            padding-top: 10px;
        }
    }
    @media (max-width: 1400px) {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    @media (max-width: 576px) {
        padding: 0 0 20px 0;
    }
    @media (max-width: 420px) {
        grid-row-start: auto;
	    grid-row-end: auto;
	    grid-column-start: auto;
        grid-column-end: auto;
    }
`
export const ProjectsWindowInfo = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;  
    padding: 0 0px 0 0;
    text-align: center;
    h2 {
        font-size: 22px;
        @media (max-width: 576px) {
            padding: 0 0 10px 0;
        }
        @media (max-width: 420px) {
            padding-top: 5px;
        }
    }
    li {
        font-size: 15px;
        @media (max-width: 420px) {
            padding: 0;
        }
    }
    @media (max-width: 1400px) {
        padding: 10px 0 0 0;
    }
    @media (max-width: 576px) {
        padding: 0 30px 0 0;
    }
    @media (max-width: 420px) {
            padding: 0;
        }
`
export const ProjectsWindowButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 5px 0 0;
    button {
        padding: 5px 0;
        width: 130px;
        transition: all .2s ease-in-out;
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 5px 5px 10px black;
        &:hover {
            transform: scale(1.1);
            color: white;
            background-color: black;
        }
        @media (max-width: 1400px) {
            width: 120px;
            justify-content: center;
        }
        @media (max-width: 420px) {
            width: 100px;
            margin: 5px 0;
        }
    }
    @media (max-width: 992px) {
        flex-direction: column;
    }
    @media (max-width: 576px) {
        padding: 0 0 0 10px;
    }
    @media (max-width: 420px) {
            padding: 15px 0;
        }
`
export const Footer = styled.div`
    @media (max-width: 576px) {
        height: 50px;
        width: 100%;
    }
`

// X Small - @media (max-width: 420px)
// Small / Landscape / Phones - @media (max-width: 576px)
// Medium / Tabets - @media (max-width: 768px)
// Large / Laptops - @media (max-width: 992px)
// XL / Dektops - @media (max-width: 1200px)
// XXL / Monitors - @media (max-width: 1400px)