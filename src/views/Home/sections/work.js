import React from 'react';
import styled from 'styled-components';
import { Header, Body } from '../../../components/typography/Typography';
import { Grid, Row } from '../../../components/layout/Grid';
import Accordion from '../../../components/misc/Accordion';
import Button from '../../../components/misc/Button';

const projects = [
  {
    title: 'Thriver',
    description: `Thriver is a food and culture startup aimed mostly at corporate clients. I joined the team as a senior front-end engineer. A large part of the job is taking ownership of a feature's journey and co-ordinating with stakeholders, as well as developing it in a responsible and timely manner. I developed features such as a full implementation of location-based services on the platform, platform-wide reviews, personalized recommendations, as well as hundreds of bug fixes and performance optimizations.`,
    tools: 'React, NextJS, TypeScript, SCSS, Apollo, GraphQL',
    link: 'https://www.audi.ca/ca/web/en/inventory.html',
  },
  {
    title: 'Audi Canada',
    description:
      'Completed a five-month contract with Audi Canada as an employee of BIMM. As a senior front-end engineer on the team, I helped build and design their first online store where you could view and purchase an Audi vehicle entirely online. This involved creating dozens of re-usable components, as well as interfacing with developers all over the world on a regular basis. In my time there, I completed hundreds of bug fixes, worked almost entirely alone on features such as the Comparison Table and Vehicle Tables, and also performed large-scale optimization to drive the load-time for the store from 9.5 seconds, to around 5 seconds.',
    tools: 'React, NextJS, TypeScript, Styled Components, Apollo, GraphQL',
    link: 'https://www.audi.ca/ca/web/en/inventory.html',
  },
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
                <NoDecorationLink href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button margin="0 0 0 0.3em">View Website</Button>
                </NoDecorationLink>
              ) : (
                <></>
              )}
              {item.github ? (
                <NoDecorationLink href={item.github} target="_blank" rel="noopener noreferrer">
                  <Button margin="0 0 0 0.3em">View on GitHub</Button>
                </NoDecorationLink>
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

const NoDecorationLink = styled.a`
  text-decoration: none;
`;

export default Work;
