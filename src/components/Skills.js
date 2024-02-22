import React from 'react';
import Marquee from 'react-fast-marquee';
import { 
  SkillsMainContainer,
  SkillsIconContainer,
  SingleSkill,
} from '../styles/SkillsStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faEthereum, faGit, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <SkillsMainContainer>

      <Marquee speed={100} loop={0} gradientWidth={600}>

        <SkillsIconContainer>

          <SingleSkill>
            <FontAwesomeIcon icon={faEthereum} />
          </SingleSkill>
        
          <SingleSkill>
            <FontAwesomeIcon icon={faHtml5} />
          </SingleSkill>
        
          <SingleSkill>
            <FontAwesomeIcon icon={faCss3} />
          </SingleSkill>
        
          <SingleSkill>
            <FontAwesomeIcon icon={faReact} />
          </SingleSkill>
          
          <SingleSkill>
            <FontAwesomeIcon icon={faNode} />
          </SingleSkill>
          
          <SingleSkill>
            <FontAwesomeIcon icon={faJsSquare} />
          </SingleSkill>
          
          <SingleSkill>
            <FontAwesomeIcon icon={faGit} />
          </SingleSkill>

        </SkillsIconContainer>

      </Marquee>

    </SkillsMainContainer>
  )
};

export default Contact;
