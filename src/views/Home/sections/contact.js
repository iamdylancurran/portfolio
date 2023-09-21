import React from 'react';
import styled from 'styled-components';
import { Grid, Row, breakpoints } from '../../../components/layout/Grid';
import { Header } from '../../../components/typography/Typography';
import Button from '../../../components/misc/Button';

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  box-sizing: border-box;
  font-family: 'Fira Sans';
  font-size: 1.3rem;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary.main};
  }

  @media only screen and (max-width: ${breakpoints.sm}) {
    margin: 1rem 1.5rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 1rem 1rem;
  margin: 1rem 0;
  font-size: 1.3rem;
  font-family: 'Fira Sans';
  box-sizing: border-box;
  resize: none;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary.main};
  }

  @media only screen and (max-width: ${breakpoints.sm}) {
    margin: 1rem 1.5rem;
  }
`;

const Label = styled.label`
  @media only screen and (max-width: ${breakpoints.sm}) {
    margin: 0 1.5rem;
  }
`;

const Contact = () => {
  return (
    <div>
      <Header color="textPrimary" align="center">
        Contact
      </Header>
      <Grid maxWidth="sm" direction="column" flexWrap="wrap">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <Row>
            <Label htmlFor="name">Name:</Label>
            <Input id="name" type="text" name="name" placeholder="Your Name" required />
          </Row>
          <Row>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" name="email" placeholder="example@example.com" required />
          </Row>
          <Row>
            <Label htmlFor="message">Message:</Label>
            <TextArea type="text" name="message" placeholder="A nice message." required />
          </Row>
          <Row>
            <Button type="submit">Send</Button>
          </Row>
        </form>
      </Grid>
    </div>
  );
};

export default Contact;
