import styled from 'styled-components';
import { breakpoints } from '../layout/Grid';

const Card = styled.div`
  flex: 0 1 calc(${(props) => props.flexWidth}% - 1em);
  background-color: white;
  padding: ${(props) => props.padding}rem;
  margin: ${(props) => props.margin};
  border-radius: ${(props) => (props.rounded ? '5px' : '0')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  @media screen and (max-width: ${breakpoints.sm}) {
    flex: 0 1 calc(100%);
    margin: 0.5rem;
    padding: ${(props) => props.padding / 2}rem;
  }
`;

export default Card;
