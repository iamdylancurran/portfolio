import styled from 'styled-components';

export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

export const media = {
  xs: (styles) => `
    @media only screen and (max-width: ${breakpoints.xs}) {
      ${styles}
    }
  `,
  sm: (styles) => `
    @media only screen and (max-width: ${breakpoints.sm}) {
      ${styles}
    }
  `,
  md: (styles) => `
    @media only screen and (max-width: ${breakpoints.md}) {
      ${styles}
    }
  `,
  lg: (styles) => `
    @media only screen and (max-width: ${breakpoints.lg}) {
      ${styles}
    }
  `,
  xl: (styles) => `
    @media only screen and (max-width: ${breakpoints.xl}) {
      ${styles}
    }
  `,
};

export const Grid = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.flexWrap};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  height: ${(props) => props.height};
  max-width: ${(props) => breakpoints[props.maxWidth]};
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`;

export const Section = styled.section`
  height: ${(props) => props.height};
`;
