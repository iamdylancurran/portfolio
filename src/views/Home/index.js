import React from 'react';
import styled from 'styled-components';
import Hello from './sections/hello';
import Me from './sections/me';

const Section = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
`;

const Home = () => {
  return (
    <div>
      <Section id="hello">
        <Hello />
      </Section>

      <Section id="me" padding="4rem 0 0 0">
        <Me />
      </Section>
    </div>
  );
};

export default Home;
