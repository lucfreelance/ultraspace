import { useState } from 'react';
import styled from 'styled-components';

const ContactFormContainer = styled.div`
  margin-top: '40px';
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #f7f7f7;
  border-radius: 5px;
`;

const ContactFormTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    const subject = 'New contact form submission';
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const emailLink = `mailto:ultracobra@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailLink;
  };

  return (
    <ContactFormContainer>
      <ContactFormTitle>Contact Us for feedback, suggest and requests. We're glad to know about you</ContactFormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Your Name</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Your Email</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Your Message</Label>
          <Textarea id="message" name="message" rows="5" value={formData.message} onChange={handleInputChange} required></Textarea>
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
