import styled from 'styled-components';
import { media } from '../../styles/utils';

export const Navigation = styled.div`
  margin-top: -2px;
  padding: 10px;
  top: 50%;
  position: absolute;
  left: 300px;
  transform: translateY(-50%);

  ${media.tablet`
    display: ${props => props.toggle ? 'block' : 'none'};
    left: 0px;
    padding: 0;
    top: 50px;
    position: relative;
    transform: none;
    `}
`;

export default Navigation;