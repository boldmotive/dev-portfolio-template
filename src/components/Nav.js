import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    NavContainer,
    MyName,
    SocialLinks,
    LinkedIn,
    GitHub,
    Email,
    NavLinks,
    MobileNavToggle,
    MobileNavExtension,
    SocialLinksExtended,
    NavLinksExtended
} from '../styles/NavStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCaretLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    let navigate = useNavigate();
    const [mobileNav, setMobileNav] = useState(false);
  return (
        <>     
            <NavContainer>
                <MyName onClick={() => {
                            setMobileNav(false)
                            }}>
                    <h1 onClick={() => navigate("./")} >Pixel Parker</h1>
                    <SocialLinks>
                        <a href="https://linkedin.com/company/boldmotive" target="_blank" rel="noreferrer">
                            <LinkedIn><FontAwesomeIcon icon={faLinkedin}/></LinkedIn>
                        </a>
                        <a href="https://github.com/boldmotive" target="_blank" rel="noreferrer">
                            <GitHub><FontAwesomeIcon icon={faGithub}/></GitHub>
                        </a>
                        <a href="mailto:hello@boldmotive.org" target="_blank" rel="noreferrer">
                            <Email><FontAwesomeIcon icon={faEnvelope}/></Email>
                        </a>
                    </SocialLinks>
                </MyName>

                <NavLinks>
                    <ul>
                        <li onClick={() => navigate("./about")}>About Me</li>
                        <li onClick={() => navigate("./projects")}>Project Showcase</li>
                        <li onClick={() => navigate("./contact")}>Contact</li>
                        <Link to="Resume-Templates.pdf" target="_blank" rel="noreferrer">Example Resume</Link>
                    </ul>
                    <MobileNavToggle onClick={() => {
                            setMobileNav((curr) => !curr)
                            }}>
                            { mobileNav ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faCaretLeft} /> }
                        </MobileNavToggle>
                </NavLinks>
                
                {mobileNav && 
                <MobileNavExtension>
                    
                    <NavLinksExtended>
                        <ul onClick={() => {
                            setMobileNav((curr) => !curr)
                            }}>
                            <li onClick={() => navigate("./about")}>About Me</li>
                            <li onClick={() => navigate("./projects")}>Project Showcase</li>
                            <li onClick={() => navigate("./contact")}>Contact</li>
                            <Link to="Resume-Templates.pdf" target="_blank" rel="noreferrer">Example Resume</Link>
                        </ul>
                    </NavLinksExtended>

                    <SocialLinksExtended onClick={() => {
                            setMobileNav((curr) => !curr)
                            }}>
                        <a href="https://linkedin.com/company/boldmotive" target="_blank" rel="noreferrer">
                            <LinkedIn><FontAwesomeIcon icon={faLinkedin}/></LinkedIn>
                        </a>
                        <a href="https://github.com/boldmotive" target="_blank" rel="noreferrer">
                            <GitHub><FontAwesomeIcon icon={faGithub}/></GitHub>
                        </a>
                        <a href="mailto:hello@boldmotive.org" target="_blank" rel="noreferrer">
                            <Email><FontAwesomeIcon icon={faEnvelope}/></Email>
                        </a>
                    </SocialLinksExtended>

                </MobileNavExtension>}
            </NavContainer>
        </>
  )};

export default Nav;
