import React from 'react';
import { Grid } from '../../../components/layout/Grid';
import { SubHeader, Body, Header } from '../../../components/typography/Typography';
import Card from '../../../components/misc/Card';
import Divider from '../../../components/misc/Divider';
import SvgIcon from '../../../components/misc/SvgIcon';

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
        <Card flexWidth="31" padding="1" rounded>
          <SvgIcon src="/icons/bolt.svg" alt="Lightning Bolt" />
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
        <Card flexWidth="31" padding="1" rounded>
          <SvgIcon src="/icons/build.svg" alt="Wrench" />
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
        <Card flexWidth="31" padding="1" rounded>
          <SvgIcon src="/icons/design.svg" alt="Star" />
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
