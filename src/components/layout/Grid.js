import styled from 'styled-components';

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `,
  sm: (styles) => `
    @media only screen and (max-width: 600px) {
      ${styles}
    }
  `,
  md: (styles) => `
    @media only screen and (max-width: 960px) {
      ${styles}
    }
  `,
  lg: (styles) => `
    @media only screen and (max-width: 1280px) {
      ${styles}
    }
  `,
  xl: (styles) => `
    @media only screen and (max-width: 1920px) {
      ${styles}
    }
  `,
};

export const Grid = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  height: ${(props) => props.height};
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`;

export const Section = styled.section`
  height: ${(props) => props.height};
`;
