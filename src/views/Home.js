import React from 'react';
import styled from 'styled-components';
import ShootingStarBackground from '../components/ShootingStarBackground';

const OverlayContainer = styled.div`
  display: flex;
  position: fixed;
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

const CenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hero = styled.h1`
  color: rgba(247, 250, 252, 0.87);
  font-size: 3rem;
  text-align: center;
`;

const SubHero = styled.h1`
  color: rgba(247, 250, 252, 0.87);
  font-size: 2.5rem;
  text-align: center;
`;

const Home = () => {
  return (
    <section>
      <ShootingStarBackground />
      <OverlayContainer>
        <Hero>
          Hi, I&apos;m <span style={{ color: '#4BC8C3' }}>Dylan Curran</span>
        </Hero>
      </OverlayContainer>
    </section>
  );
};

export default Home;
