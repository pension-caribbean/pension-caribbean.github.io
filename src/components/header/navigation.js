import styled from 'styled-components';
import { media } from '../../styles/utils';

export const Navigation = styled.div`
  margin-top: -2px;
  padding: 20px;
  top: 50%;
  position: absolute;
  left: 230px;
  transform: translateY(-50%);

  ${media.tablet`
    display: ${props => props.toggle ? 'block' : 'none'};
    left: 0px;
    padding: 0;
    top: 30px;
    position: relative;
    transform: none;
    `}
`;

export default Navigation;