import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Helvetica', sans-serif;
        user-select: none;
        li {
            list-style-type: none;
        }
        &:focus {
            outline: none;
        }
    }

    a {
        color: #EEDFD9; /* Change to your desired color */
      }

    a:hover {
        color: #0056b3; /* Change to your desired hover color */
    }
      
`