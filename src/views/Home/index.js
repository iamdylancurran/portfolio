import React, { Suspense } from 'react';
import styled from 'styled-components';
import Hello from './sections/hello';

const Me = React.lazy(() => import('./sections/me'));
const Skills = React.lazy(() => import('./sections/skills'));
const Projects = React.lazy(() => import('./sections/work'));
const Contact = React.lazy(() => import('./sections/contact'));

const Section = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding: ${(props) => props.padding};
  background-color: ${(props) =>
    props.dark ? props.theme.colors.background.dark : props.theme.colors.background.secondary};
`;

const Home = () => {
  return (
    <div>
      <Section id="hello">
        <Hello />
      </Section>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Section id="me" padding="4rem 0 4rem 0">
          <Me />
        </Section>
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Section id="skills" padding="4rem 0 8rem 0" dark>
          <Skills />
        </Section>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Section id="projects" padding="4rem 0 4rem 0">
          <Projects />
        </Section>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Section id="contact" padding="4rem 0 4rem 0">
          <Contact />
        </Section>
      </Suspense>

      
    </div>
  );
};

export default Home;
