import styled from 'styled-components';

const switchColors = (color, colors) => {
  switch (color) {
    case 'primary':
      return colors.primary.main;
    case 'textPrimary':
      return colors.text.primary;
    case 'textSecondary':
      return colors.text.secondary;
    case 'whitePrimary':
      return colors.text.whitePrimary;
    case 'whiteSecondary':
      return colors.text.whiteSecondary;
    default:
      return colors.text.primary;
  }
};

export const Header = styled.h1`
  font-size: ${({ theme: { typography } }) => typography.h1.fontSize};
  line-height: ${({ theme: { typography } }) => typography.h1.lineHeight};
  font-weight: ${({ theme: { typography } }) => typography.h1.fontWeight};
  letter-spacing: ${({ theme: { typography } }) => typography.h1.letterSpacing};
  color: ${({ color, theme: { colors } }) => switchColors(color, colors)};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const SubHeader = styled.h2`
  font-size: ${({ theme: { typography } }) => typography.h2.fontSize};
  line-height: ${({ theme: { typography } }) => typography.h2.lineHeight};
  font-weight: ${({ theme: { typography } }) => typography.h2.fontWeight};
  letter-spacing: ${({ theme: { typography } }) => typography.h2.letterSpacing};
  color: ${({ color, theme: { colors } }) => switchColors(color, colors)};
  text-align: ${(props) => props.align};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const Body = styled.p`
  font-size: ${({ theme: { typography } }) => typography.body.fontSize};
  line-height: ${({ theme: { typography } }) => typography.body.lineHeight};
  font-weight: ${({ theme: { typography } }) => typography.body.fontWeight};
  letter-spacing: ${({ theme: { typography } }) => typography.body.letterSpacing};
  color: ${({ color, theme: { colors } }) => switchColors(color, colors)};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
