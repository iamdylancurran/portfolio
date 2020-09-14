import React from 'react';
import { Grid, Row } from '../../../components/layout/Grid';
import { Header } from '../../../components/typography/Typography';

const Contact = () => {
  return (
    <div>
      <Header color="textPrimary" align="center">
        Contact
      </Header>
      <Grid maxWidth="lg" direction="column" flexWrap="wrap">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <Row>
            <p>
              <label>
                Name: <input type="text" name="name" />
              </label>
            </p>
          </Row>
          <Row>
            <p>
              <label>
                Email: <input type="text" name="email" />
              </label>
            </p>
          </Row>
          <Row>
            <p>
              <label>
                Message: <textarea type="text" name="message" />
              </label>
            </p>
          </Row>
          <Row>
            <button type="submit">Send</button>
          </Row>
        </form>
      </Grid>
    </div>
  );
};

export default Contact;
