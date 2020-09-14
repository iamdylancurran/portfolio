import styled from 'styled-components';
import { breakpoints } from '../layout/Grid';

const Button = styled.button`
  display: inline-block;
  padding: 0.35em 2em;
  border: 0.1em solid ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.primary.main};
  cursor: pointer;
  margin: ${(props) => props.margin};
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.whitePrimary};
  text-align: center;
  transition: all 0.2s;

  &:hover {
    filter: brightness(1.25);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.light};
  }

  @media all and (max-width: ${breakpoints.sm}) {
    display: block;
    margin: 0.4em auto;
  }
`;

export default Button;
