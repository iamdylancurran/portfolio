import React from 'react';
import styled, { keyframes, css } from 'styled-components';

// Credit: https://codepen.io/YusukeNakaya/pen/XyOaBj?editors=1100

const shootingTime = '3000ms';

const tail = keyframes`
  0% {
    width: 0;
  }
  
  30% {
    width: 100px;
  }
  
  100% {
    width: 0;
  }
`;

const shining = keyframes`
  0% {
    width: 0;
  }
  
  50% {
    width: 30px;
  }
  
  100% {
    width: 0;
  }
`;

const shooting = keyframes`
  0% {
    transform: translateX(0);
  }
  
  100% {
    transform: translateX(300px);
  }
`;

const sky = keyframes`
  0% {
    transform: rotate(45deg);
  }
  
  100% {
    transform: rotate(45 + 360deg);
  }
`;

const Background = styled.div`
  background-color: #171923;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Night = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotateZ(45deg);
  animation: ${sky} 200000ms linear infinite;
`;

function createShootingStars() {
  let styles = '';

  for (let i = 1; i < 20; i += 1) {
    const delay = `${Math.round(Math.random() * 1000)}0ms`;

    styles += `
      &:nth-child(${i}) {
        top: calc(${Math.round(Math.random() * 1080)}px);
        left: calc(${Math.round(Math.random() * 1920)}px);
        animation-delay: ${delay};

        &::before,
        &::after {
          animation-delay: ${delay};
        }
      }
    `;
  }

  return css`
    ${styles}
  `;
}

const ShootingStar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  // width: 100px;
  height: 2px;
  background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
  animation: ${tail} ${shootingTime} ease-in-out infinite,
    ${shooting} ${shootingTime} ease-in-out infinite;

  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    // width: 30px;
    height: 2px;
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 255, 0),
      rgba(95, 145, 255, 1),
      rgba(0, 0, 255, 0)
    );
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: ${shining} ${shootingTime} ease-in-out infinite;
  }

  &:after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    // width: 30px;
    height: 2px;
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 255, 0),
      rgba(95, 145, 255, 1),
      rgba(0, 0, 255, 0)
    );
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: ${shining} ${shootingTime} ease-in-out infinite;
    transform: translateX(50%) rotateZ(-45deg);
  }

  ${createShootingStars()}
`;

const ShootingStarBackground = () => {
  const stars = [];

  for (let i = 0; i < 20; i += 1) {
    stars.push(<ShootingStar key={i} />);
  }

  return (
    <Background>
      <Night>
        {stars.map((value) => {
          return value;
        })}
      </Night>
    </Background>
  );
};

export default ShootingStarBackground;
