import React from 'react';
import { ContactContainer, Form, Input, TextArea, Button } from '../styles/ContactStyle';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY"); // Replace with your actual access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => setResult(""), 5000); // Clear the message after 5 seconds
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <ContactContainer>
      <Form onSubmit={onSubmit}>
        <h1>Contact Me</h1>
        <p>
          If you have any questions or would like to get in touch, please fill out the form below.
          I will get back to you as soon as possible.
          <br/><br/>
          You can also reach me on my social media channels:
          <br/><br/>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
          <br/>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">Twitter</a>
          <br/>
        </p>
        <br/><br/>
        <p>
          <a
            href="https://www.pensight.com/x/boldmotive"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'blue' }}>
            Click to purchase the official React Developer template and use it to create your own portfolio.<br/><br/>
          </a>
        </p>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" required />
        <Button type="submit">Send</Button>
        <p>{result}</p>
      </Form>
    </ContactContainer>
  );
}