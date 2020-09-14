import React from 'react';
import styled from 'styled-components';

const HoverStyle = `
  &:hover {
    filter: brightness(1.25);
    transition: filter 0.4s;
  }
  
`;

const Icon = styled.img`
  display: block;
  min-width: ${(props) => props.size || '3rem'};
  max-width: 100%;
  margin: 0 auto;

  ${(props) => (props.hover ? HoverStyle : ``)}
`;

const SvgIcon = ({ src, alt, size, hover }) => {
  return <Icon src={src} alt={alt} size={size} hover={hover} />;
};

export default SvgIcon;
