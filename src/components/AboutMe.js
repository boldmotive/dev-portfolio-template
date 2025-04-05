import React from 'react';
import Slider from 'react-styled-carousel';
import { 
    AboutMainContainer,
    Section,
    TwoColumnLayout,
    HeadshotColumn,
    AboutColumn,
    StyledSlider,
    } from '../styles/AboutMeStyle';

import Headshot from '../images/projects/Headshot.png';
import cert1 from '../images/certificates/cert1.png';
import cert2 from '../images/certificates/cert2.png';
import cert3 from '../images/certificates/cert3.png';


const AboutMe = () => {
  
  return (
    <>
    <div>
    
    <AboutMainContainer>
        <TwoColumnLayout>
            <HeadshotColumn>
                <img src={ Headshot } alt="profile" />
            </HeadshotColumn>
            <AboutColumn>
                <h1>Learn More About *Insert Your Name*</h1><br/><br/>
                <p>*This section allows you to introduce yourself to employers, clients, or collaborators.*<br/>

                <br/>*Use this space to highlight key details about yourself and your knowledge of programming*<br/>

                <br/>*You don’t have to use this, but this is a general basis of what you might want to convey*
                
                <br/><br/>
            
                </p>
            </AboutColumn>
        </TwoColumnLayout>

    </AboutMainContainer>

    {/* Awards and Certifications Section */}
    
    <Section>
        
        <h2 style={{ textAlign: 'center' }}>
            Awards and Certifications
            <br/><br/>
        </h2>
        <p>
            {/* List awards and certifications here */}
            <center>
            *List out awards and certifications you have earned either text or image of certifications*<br/><br/>
            Here are a few of the awards and certifications I have received: <br/><br/><br/>
            </center>
        </p>
        <Slider 
            cardsToShow={ 1 }
            showDots={ false }
            showArrow={ true }
            autoSlide={ true }
            slideTime={ 5000 }
            margin={ 8.5 }
            style={{ maxWidth: '100%', height: 'auto' }}
            >
            <StyledSlider>
            <h1><img src={ cert1 } alt="cert1" /></h1>
            <h1><img src={ cert2 } alt="cert2" /></h1>
            <h1><img src={ cert3 } alt="cert3" /></h1>
            </StyledSlider>
        </Slider>

    </Section>
    
    </div>
    </>
  );
};

export default AboutMe;
