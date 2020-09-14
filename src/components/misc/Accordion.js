import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary.main};
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  filter: ${(props) => (props.active ? 'brightness(1.25)' : 'brightness(1)')};
  border: ${(props) => `2px solid ${props.theme.colors.grey[50]}`};

  &:after {
    content: ${(props) => `"${props.active ? '-' : '+'}"`};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text.whitePrimary};
    float: right;
  }

  &:hover {
    filter: brightness(1.25);
  }
`;

const AccordionPanel = styled.div`
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.grey[100]};
  display: ${(props) => (props.active ? 'block' : 'none')};
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;

const Summary = styled.span`
  font-size: 2rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text.whitePrimary};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin: 0.5rem 0;
`;

const Accordion = ({ summary, children }) => {
  const [active, setActive] = useState(false);

  const handleActive = () => setActive(!active);

  return (
    <div style={{ flexGrow: 1 }}>
      <AccordionButton active={active} onClick={handleActive}>
        <Summary>{summary}</Summary>
      </AccordionButton>
      <AccordionPanel active={active}>{children}</AccordionPanel>
    </div>
  );
};

export default Accordion;
