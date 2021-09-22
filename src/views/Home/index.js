import React from 'react';
import styled from 'styled-components';
import Hello from './sections/hello';
import Me from './sections/me';
import Skills from './sections/skills';
import Projects from './sections/work';
import Contact from './sections/contact';
import Social from './sections/social';
import Footer from '../../components/layout/Footer';

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
      <Section id="hello">
        <Hello />
      </Section>

      <Section id="me" padding="4rem 0 4rem 0">
        <Me />
      </Section>

      <Section id="skills" padding="4rem 0 8rem 0" dark>
        <Skills />
      </Section>

      <Section id="projects" padding="2rem 0 2rem 0">
        <Projects />
      </Section>

      <Section id="contact" padding="2rem 0 2rem 0">
        <Contact />
      </Section>

      <Section id="contact" padding="4rem 0 4rem 0" margin="0 0 5rem 0">
        <Social />
      </Section>

      <Footer />
    </div>
  );
};

export default Home;
