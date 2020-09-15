import React, { Suspense } from 'react';
import styled from 'styled-components';
const Hello = React.lazy(() => import('./sections/hello'));
const Me = React.lazy(() => import('./sections/me'));
const Skills = React.lazy(() => import('./sections/skills'));
const Projects = React.lazy(() => import('./sections/work'));
const Contact = React.lazy(() => import('./sections/contact'));
const Social = React.lazy(() => import('./sections/social'));
const Footer = React.lazy(() => import('../../components/layout/Footer'));

const Section = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) =>
    props.dark ? props.theme.colors.background.dark : props.theme.colors.background.secondary};
`;

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Section id="hello">
          <Hello />
        </Section>
      </Suspense>

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
        <Section id="projects" padding="2rem 0 2rem 0">
          <Projects />
        </Section>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Section id="contact" padding="2rem 0 2rem 0">
          <Contact />
        </Section>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Section id="contact" padding="4rem 0 4rem 0" margin="0 0 5rem 0">
          <Social />
        </Section>
      </Suspense>

      <Suspense fallback={<div>Footer</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
