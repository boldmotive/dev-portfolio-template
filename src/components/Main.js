import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeMainContainer,
  WelcomeHeader,
  WelcomeText,
  ModernButton 
} from '../styles/MainStyle';

import Skills from './Skills';

const Main = () => {

  return (
    <>
    <HomeMainContainer>
      <WelcomeHeader>
        <h1>
          <strong>
            Welcome to my portfolio
          </strong>
        </h1> 
      </WelcomeHeader>
      <br/><br/>
        <h3 style={{ textAlign: 'center' }}>
          <em>
            My name is Pixel Parker and I am so glad to see you here!
          
          <br/>
          Have a look around and feel free to reach out to me.

          </em>
          </h3>
        <br/><br/>
      <WelcomeText>
          
          
          <h4 
            style={{ 
              fontWeight: 'bold',
              fontSize: '29px',
              color: 'white' }}>
            <em>✅ Open to Work </em>
            </h4>
          <br/>
          <h3>Software Engineer based in New York</h3>
          <br/>
          <ModernButton>
            <Link to="/projects">
              View My Projects
              </Link>
            </ModernButton>
      </WelcomeText>
      <br/><br/>
      
      <h3 style={{ textAlign: 'center' }}>
        <em>
          My Development Skills:<br/>
        </em><br/>
              React, Node.js, JavaScript, HTML, CSS, Git, Ethereum
      </h3>
      <br/><br/>
      <Skills></Skills>
    </HomeMainContainer>
    
    </>
  )
};

export default Main;
