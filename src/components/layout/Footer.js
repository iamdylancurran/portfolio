import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from './Grid';
import { Body } from '../typography/Typography';

const FooterContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 100px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.grey[900]};
  text-align: center;
`;

const FooterLink = styled.a`
  text-decoration: none;
`;

const footerLinks = [
  {
    link: 'https://twitter.com/iamdylancurran',
    text: 'Twitter',
  },
  {
    link: 'https://github.com/iamdylancurran',
    text: 'GitHub',
  },
  {
    link: 'https://www.linkedin.com/in/dylancurran/',
    text: 'LinkedIn',
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <Grid justifyContent="center" alignItems="center" direction="row">
        {footerLinks.map((item) => (
          <Row>
            <FooterLink href={item.link} target="_blank" rel="noopener noreferrer" key={item.text}>
              <Body color="whitePrimary" align="center">
                {item.text}
              </Body>
            </FooterLink>
          </Row>
        ))}
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
