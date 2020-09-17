import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from '../../../components/layout/Grid';
import { SubHeader, Body } from '../../../components/typography/Typography';

const ProfilePicture = styled.img.attrs({
  src: '/images/prof.jpg',
  alt: 'Dylan Curran smilling.',
})`
  border-radius: 50%;
  max-width: 150px;
  height: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const Me = () => {
  return (
    <Grid alignItems="center" justifyContent="center" direction="column" maxWidth="sm">
      <Row>
        <ProfilePicture />
      </Row>
      <Row>
        <SubHeader color="primary" align="center" fontWeight="300" style={{ marginBottom: 0 }}>
          Dia dhuit!
        </SubHeader>
      </Row>
      <Row>
        <Body align="center">
          My name is Dylan Curran. I&apos;m a front-end web developer, consultant, and budding
          writer. Originally from the south of Ireland, I&apos;m currently based in Toronto, Canada.
        </Body>
      </Row>

      <Row>
        <Body align="center">
          Since beginning my journey as a freelance developer almost ten years ago, I&apos;ve done
          remote work for businesses, consulted for startups, written articles for major newspapers,
          appeared on national TV, and started several of my own ventures.
        </Body>
      </Row>

      <Row>
        <Body align="center">
          I like to wear many hats, and I&apos;m constantly looking to adapt and improve in whatever
          I&apos;m doing. I love creating beautiful but functional UIs, and giving people that wow
          experience when they open up a website.
        </Body>
      </Row>
    </Grid>
  );
};

export default Me;
