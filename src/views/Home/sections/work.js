import React from 'react';
import { Header, Body } from '../../../components/typography/Typography';
import { Grid, Row } from '../../../components/layout/Grid';
import Accordion from '../../../components/misc/Accordion';
import Button from '../../../components/misc/Button';

const projects = [
  {
    title: 'Sindle',
    description:
      'Sindle is a natural language processing app built for Slack. I designed and developed the landing website and dashboard, both built in NextJS with Material-UI. I also contributed to the internal API, written in TypeScript.',
    tools: 'React, NextJS, NodeJS, TypeScript, Material-UI, Digital Ocean',
    link: 'https://sindle.io',
  },
  {
    title: 'VFT Solutions',
    description:
      'VFT Solutions is an anti-piracy company. While there, I co-ordinated and built their new scraping software, frequently interacting with social media APIs and creating a fluid UI to accelerate their work processes.',
    tools: 'NodeJS, Express, NextJS, Postgres, MongoDB, Python, AWS',
    link: 'https://vft-solutions.com',
  },
  {
    title: 'Work In Progress',
    description: 'Work In Progress',
    tools: 'Work In Progress',
  },
  {
    title: 'Work In Progress 2',
    description: 'Work In Progress',
    tools: 'Work In Progress',
  },
  {
    title: 'Work In Progress 3',
    description: 'Work In Progress',
    tools: 'Work In Progress',
  },
];

const Work = () => {
  return (
    <div>
      <Header color="textPrimary" align="center">
        Work
      </Header>
      <Grid maxWidth="lg" direction="column" flexWrap="wrap">
        {projects.map((item) => (
          <Row key={item.title}>
            <Accordion summary={item.title}>
              <Body color="textSecondary">{item.tools}</Body>
              <Body color="textPrimary">{item.description}</Body>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button margin="0 0 0 0.3em">View Website</Button>
                </a>
              ) : (
                <></>
              )}
              {item.github ? (
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <Button margin="0 0 0 0.3em">View on GitHub</Button>
                </a>
              ) : (
                <></>
              )}
            </Accordion>
          </Row>
        ))}
      </Grid>
    </div>
  );
};

export default Work;
