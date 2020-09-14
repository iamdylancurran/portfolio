import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  display: block;
  min-width: 6rem;
  max-width: 100%;
  margin: 0 auto;
`;

const SvgIcon = ({ src, alt }) => {
  return <Icon src={src} alt={alt} />;
};

export default SvgIcon;
