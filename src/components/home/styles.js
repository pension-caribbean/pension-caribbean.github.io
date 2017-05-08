import styled, { keyframes } from 'styled-components';
import { media } from '../../styles/utils'

export const Content = styled.div`
  color: #000;
  font-size: 14px;
  text-align: center;
  font-weight: 100;
`;

export const FirstModule = styled.div`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 120px);
  justify-content: center;
  position: relative;
`;

export const SecondModule = styled.div`
  align-items: center;
  min-height: 100vh;
  justify-content: center;
`;

const arrowAnimation = keyframes`
  from {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 10px);
  }

  to {
    transform: translate(0, 0);
  }
`;

export const ArrowDiv = styled.div`
  left: 0;
  right: 0;
  position: absolute;
  bottom: 30px;
  animation: ${arrowAnimation} 1s infinite;

  ${media.desktop`display: none`}
`;
