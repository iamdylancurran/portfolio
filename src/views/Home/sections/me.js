import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from '../../../components/layout/Grid';
import { SubHeader, Body } from '../../../components/typography/Typography';

const ProfilePicture = styled.img.attrs({
  src: '/images/prof.jpg',
})`
  border-radius: 50%;
  max-width: 150px;
  height: auto;
`;

const Me = () => {
  return (
    <Grid alignItems="center" justifyContent="center" direction="column" maxWidth="sm">
      <Row>
        <ProfilePicture />
      </Row>
      <Row>
        <SubHeader color="primary" align="center" fontWeight="300" style={{ marginBottom: 0 }}>
          Hey.
        </SubHeader>
      </Row>
      <Row>
        <Body align="center">
          Hi, my name is Dylan Curran. I&apos;m a front-end web developer, product manager,
          consultant, and budding writer.
        </Body>
      </Row>
    </Grid>
  );
};

export default Me;
