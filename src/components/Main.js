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
            Welcome to creating a Website
          </strong>
        </h1> 
      </WelcomeHeader>
      <br/><br/>
        <h3 style={{ textAlign: 'center' }}>
          <em>
            Here we'll introduce ourselves. Ex: My name is...
          
          <br/>
          Have a look around and feel free to reach out to me.

          </em>
          </h3>
        <br/>
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
          <table>
            <tr>
              <td>
              <ModernButton>
                <Link to="/about">
                Learn About Me
                </Link>
              </ModernButton>
              </td>

              <td>
              <ModernButton>
                <Link to="/projects">
                View My Projects
                </Link>
              </ModernButton>
              </td>
            </tr>
          </table>
      </WelcomeText>
      
      <h3 style={{ textAlign: 'center' }}>
        <em>
          My Development Skills:<br/>
        </em><br/>
              Your coding languages, ex: HTML, CSS, JavaScript, React, Node.js, Git, Ethereum...
      </h3>
      <br/>
      <Skills></Skills>
    </HomeMainContainer>
    
    </>
  )
};

export default Main;
