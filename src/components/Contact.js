import React from 'react';
import { ContactContainer, Form, Input, TextArea, Button } from '../styles/ContactStyle';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <ContactContainer>
      <Form onSubmit={onSubmit}>
        <p>
          <a
            href="https://www.pensight.com/x/boldmotive"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'blue' }}>
            purchase it on our website
            {" "} and use it to create your own portfolio.<br/><br/>
          </a>
          <a
            href="https://www.pensight.com/x/boldmotive"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'blue' }}>
            purchase it on our website
            {" "} and use it to create your own portfolio.<br/><br/>
          </a>
        </p>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" required />
        <Button type="submit">Send</Button>
        <p>{result}</p>
      </Form>
      <span>{result}</span>
    </ContactContainer>
  );
}