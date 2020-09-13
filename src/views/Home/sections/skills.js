import React from 'react';
import styled from 'styled-components';
import { Grid, breakpoints } from '../../../components/layout/Grid';
import { SubHeader, Body, Header } from '../../../components/typography/Typography';

const Card = styled.div`
  flex: 0 1 calc(31% - 1em);
  background-color: white;
  padding: 1rem;
  border-radius: 5px;

  @media screen and (max-width: ${breakpoints.sm}) {
    flex: 0 1 calc(100%);
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

const Divider = styled.hr`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin-bottom: 2rem;
`;

const SvgIcon = styled.img`
  display: block;
  min-width: 6rem;
  max-width: 100%;
  margin: 0 auto;
`;

const frontEndSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Vue'];
const backEndSkills = ['NodeJS', 'Express', 'MongoDB', 'SQL', 'Serverless', 'AWS'];
const designSkills = [
  'UX/UI',
  'Figma',
  'Photoshop',
  'Illustrator',
  'Styled-Components',
  'Material-UI & Bulma',
];

const Skills = () => {
  return (
    <div>
      <Header color="whitePrimary" align="center">
        Skills
      </Header>
      <Grid maxWidth="lg" flexWrap="wrap" justifyContent="space-between">
        <Card>
          <SvgIcon src="/icons/bolt.svg" />
          <SubHeader color="primary" align="center" margin="1.5rem 0">
            Front-End
          </SubHeader>

          <Body color="textPrimary" align="center">
            I enjoy writing things from scratch, and bringing ideas and thoughts to life in the
            browser.
          </Body>
          <Divider />
          <Body color="primary" align="center">
            Front-End Tools:
          </Body>
          {frontEndSkills.map((item) => (
            <Body color="textPrimary" align="center" key={item}>
              {item}
            </Body>
          ))}
        </Card>
        <Card>
          <SvgIcon src="/icons/build.svg" />
          <SubHeader color="primary" align="center" margin="1.5rem 0">
            Back-End
          </SubHeader>
          <Body color="textPrimary" align="center">
            While my specialty is front-end, I make sure to keep myself current and competent with
            back-end technologies.
          </Body>
          <Divider />
          <Body color="primary" align="center">
            Back-End Tools:
          </Body>
          {backEndSkills.map((item) => (
            <Body color="textPrimary" align="center" key={item}>
              {item}
            </Body>
          ))}
        </Card>
        <Card>
          <SvgIcon src="/icons/design.svg" />
          <SubHeader color="primary" align="center" margin="1.5rem 0">
            Design
          </SubHeader>

          <Body color="textPrimary" align="center">
            I value intuitive yet simple user experiences and have a minimalist philosophy in
            everything I design.
          </Body>
          <Divider />
          <Body color="primary" align="center">
            Design Tools:
          </Body>
          {designSkills.map((item) => (
            <Body color="textPrimary" align="center" key={item}>
              {item}
            </Body>
          ))}
        </Card>
      </Grid>
    </div>
  );
};

export default Skills;
