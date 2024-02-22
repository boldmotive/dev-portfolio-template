// ContactPage.js
import React from 'react';
import { ContactContainer, Form, Input, TextArea, Button } from '../styles/ContactStyle';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle form submission, like sending data to your server or an API endpoint
    alert("Form submitted. We'll get back to you soon!");
  };

  return (
    <ContactContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Get in touch with Bold Motive Group</h2><br/>
        <p>We made this character portfolio so that you can grow as a developer.
            You can {" "}
            <a 
                href="https://www.pensight.com/x/boldmotive"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'blue' }}>
                    purchase it on our website
            </a>
            {" "}
            and use it to create your own portfolio.<br/><br/>
            Follow us on {" "}
            <a 
                href="https://www.instagram.com/computer.science.society"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'blue' }}>
                    Instagram
            </a>
            {" "} and send a DM to learn more about the Computer Science Society!</p><br/>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" required></TextArea>
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
};

export default ContactPage;
