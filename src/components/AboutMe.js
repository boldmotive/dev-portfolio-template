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

import PixelParker from '../images/PixelParker-logo.png';
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
                <img src={ PixelParker } alt="profile" />
            </HeadshotColumn>
            <AboutColumn>
                <h1>Learn More About Pixel Parker</h1><br/><br/>
                <p>Known for her superb teaching skills at the Computer Science Society,
                Pixel Parker is a full-stack software engineer based in New York. She has a passion for
                creating and developing software that is both user-friendly and efficient.<br/>

                <br/>Pixel has a strong background in computer science and has worked with a variety of
                programming languages and frameworks. She is a quick learner and is always eager to
                learn new things. She is also a great team player and enjoys collaborating with others
                to create amazing software.<br/>

                <br/>In her free time, Pixel enjoys playing video games, reading, and spending time with her
                friends and family. She is also an avid fan of the New York Mets and enjoys going to games
                whenever she can.
                
                <br/><br/>Pixel is currently seeking new opportunities and is open to work. If you would like to
                learn more about her or her work, feel free to reach out to her via the contact page. She would
                love to hear from you!
            
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
            I have earned my qualifications over the past several years and have been recognized for my hard work and dedication. <br/><br/>
            Here are a few of the awards and certifications I have received:<br/><br/><br/>
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
