import React from 'react';
import styled from 'styled-components';
import ShootingStarBackground from '../../../components/ShootingStarBackground';
import { Row } from '../../../components/layout/Grid';
import { Header, SubHeader } from '../../../components/typography/Typography';

const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;

const Hello = () => {
  return (
    <div>
      <ShootingStarBackground />
      <OverlayContainer>
        <Row>
          <Header color="whitePrimary" margin="0.5rem" align="center">
            Hi, I&apos;m <span style={{ color: '#4BC8C3' }}>Dylan Curran</span>.
          </Header>
        </Row>
        <Row>
          <SubHeader color="whitePrimary" margin="0" align="center">
            I&apos;m a Front-End Web Developer.
          </SubHeader>
        </Row>
      </OverlayContainer>
    </div>
  );
};

export default Hello;
