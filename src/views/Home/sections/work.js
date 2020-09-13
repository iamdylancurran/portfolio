import React from 'react';
import styled from 'styled-components';
import { Header, Body } from '../../../components/typography/Typography';
import { Grid } from '../../../components/layout/Grid';
import Card from '../../../components/misc/Card';

const projects = [
  {
    img: 'https://sindle-graphics.s3-us-west-2.amazonaws.com/Logo/logo_colour.png',
    title: 'Sindle',
    description:
      'Sindle is a natural language processing app. I designed and developed the landing page, and the SaaS dashboard, from scratch. I also contributed to the internal API, built in Node.',
    tools: 'React, NextJS, NodeJS, Material-UI, Digital Ocean',
  },
  {
    img: 'https://www.vft-solutions.com/wp-content/uploads/2014/10/vft_header_logo_retina.png',
    title: 'VFT Solutions',
    description:
      'I am a founder of Sindle, a Slack app that performs natural language analysis to report on community sentiment and engagement. I designed and developed the landing page, and the SaaS dashboard, from scratch. I also contributed to the internal API, built in Node.',
    tools: 'React, NextJS, NodeJS, Material-UI, Digital Ocean',
  },
  {
    img: 'https://sindle-graphics.s3-us-west-2.amazonaws.com/Logo/logo_colour.png',
    title: 'VFT Solutions',
    description:
      'I am a founder of Sindle, a Slack app that performs natural language analysis to report on community sentiment and engagement. I designed and developed the landing page, and the SaaS dashboard, from scratch. I also contributed to the internal API, built in Node.',
    tools: 'React, NextJS, NodeJS, Material-UI, Digital Ocean',
  },
];

const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`;

const Work = () => {
  return (
    <div>
      <Header color="textPrimary" align="center">
        Work
      </Header>
      <Grid maxWidth="lg" flexWrap="wrap" justifyContent="space-between">
        {projects.map((item) => (
          <Card flexWidth="29" padding="2" margin="1rem 0">
            <ProjectImage src={item.img} />
            <Body color="primary">{item.title}</Body>
            <Body color="textPrimary">{item.description}</Body>
            <Body color="primary">{item.tools}</Body>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Work;
