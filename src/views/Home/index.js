import React from 'react';
import styled from 'styled-components';
import Hello from './sections/hello';
import Me from './sections/me';
import Skills from './sections/skills';

const Section = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding: ${(props) => props.padding};
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

      <Section id="skills" padding="4rem 0 4rem 0" style={{ backgroundColor: '#171923' }}>
        <Skills />
      </Section>
    </div>
  );
};

export default Home;
