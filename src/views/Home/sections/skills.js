import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '../../../components/layout/Grid';
import { HexagonGrid, HexagonItem } from '../../../components/misc/HexagonGrid';
import { SubHeader, Body } from '../../../components/typography/Typography';

const skills = [
  {
    img: '/images/skills/html5.png',
    title: 'HTML',
    desc: 'Proficient',
  },
  {
    img: '/images/skills/css3.png',
    title: 'CSS',
    desc: 'Proficient',
  },
  {
    img: '/images/skills/js.png',
    title: 'JavaScript',
    desc: 'Proficient',
  },
  {
    img: '/images/skills/react.png',
    title: 'React',
    desc: 'Proficient',
  },
  {
    img: '/images/skills/vue.png',
    title: 'Vue',
    desc: 'Intermediate',
  },
  {
    img: '/images/skills/nextjs.png',
    title: 'NextJS',
    desc: 'Intermediate',
  },
];

const Skills = () => {
  return (
    <div>
      <SubHeader color="whitePrimary" align="center">
        Skills
      </SubHeader>
      <Grid maxWidth="md">
        <HexagonGrid>
          {skills.map((item) => (
            <HexagonItem img={item.img} alt={item.title} title={item.title} desc={item.desc} />
          ))}
        </HexagonGrid>
      </Grid>
    </div>
  );
};

export default Skills;
