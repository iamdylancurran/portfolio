import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from '../../../components/layout/Grid';
import { Header } from '../../../components/typography/Typography';
import Button from '../../../components/misc/Button';

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  box-sizing: border-box;
  font-family: 'Fira Sans';

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary.main};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  font-family: 'Fira Sans';
  box-sizing: border-box;
  resize: none;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary.main};
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
            <label htmlFor="name">Name:</label>
            <Input id="name" type="text" name="name" required />
          </Row>
          <Row>
            <label htmlFor="email">Email:</label>
            <Input type="email" name="email" required />
          </Row>
          <Row>
            <label htmlFor="message">Message:</label>
            <TextArea type="text" name="message" required />
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
