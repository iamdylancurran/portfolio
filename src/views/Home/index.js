import React from 'react';
import styled from 'styled-components';
import Hello from './sections/hello';
import Me from './sections/me';

const Section = styled.section`
  width: 100%;
  overflow-x: hidden;
  margin-bottom: ${(props) => props.marginBottom};
`;

const Home = () => {
  return (
    <div>
      <Section id="hello" marginBottom="4rem">
        <Hello />
      </Section>

      <Section id="me">
        <Me />
      </Section>
    </div>
  );
};

export default Home;
