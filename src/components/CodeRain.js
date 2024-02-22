import React from 'react';
import { useState, useEffect } from 'react';
import { 
  CodeRainContainer, 
  // CodeLine, 
  GlobalStyle 
} from '../styles/CodeRainStyle';

// const generateCodeLine = (key, screenWidth) => {
//   const leftOffset = Math.random() * screenWidth; // Position each line randomly across the width of the screen
//   const duration = Math.random() * 10 + 5; // Random duration between 5 and 15 seconds for each line
//   const codeLength = Math.floor(Math.random() * 50 + 50); // Random code length between 50 and 100 characters
//   const codeString = Array.from({ length: codeLength }, () => Math.random() > 0.5 ? '1' : '0').join('');

//   return (
//     <CodeLine key={key} leftOffset={leftOffset} duration={duration}>
//       {codeString}
//     </CodeLine>
//   );
// };

const CodeRain = () => {
    const [trails, setTrails] = useState([]);
  
    // HORIZONTAL [BYTE-LINE] TRAILS
    useEffect(() => {
      const generateTrails = () => {
        const columns = Math.floor(window.innerWidth / 20);
        const tempTrails = [];
  
        for (let i = 0; i < columns; i++) {
          const key = `trail-${i}`;
          const style = {
            bottom: `${i * 20}px`,
            top: `${-Math.random() * 5000}px`,
            animation: `fall ${Math.random() * 5 + 5}s linear infinite`,
            color: '#0f0',
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
            position: 'relative',
            rotate: `${Math.random() * 360}deg`,
            repeat: 'repeat-x',
          };
          tempTrails.push(<div key={key} style={style}>{Array(100).fill(0).map(() => Math.round(Math.random())).join(' ')}</div>);
        }
  
        setTrails(tempTrails);
      };
  
      generateTrails();
    }, []);

    // VERTICAL LINES
    // const [lines, setLines] = useState([]);
    // const numberOfLines = 100; // Adjust for more or fewer lines
  
    // useEffect(() => {
    //   const screenWidth = 100; // Using vw units for simplicity
    //   const newLines = Array.from({ length: numberOfLines }, (_, i) => generateCodeLine(i, screenWidth));
    //   setLines(newLines);
    // }, []);

  
    return (
      <>
        <GlobalStyle />
        <CodeRainContainer>
          {/* {lines} */}
          {trails}
        </CodeRainContainer>
      </>
    );
  };
  
export default CodeRain;