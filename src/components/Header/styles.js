import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../styles/utils'

export const DHeader = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 50px 0;
  position: relative;
`

export const HLink = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: auto;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 13px;
  color: #999;

  &:hover {
    color: #000;
  }

  ${media.tablet`
    font-weight: bold;
    font-size: 20px;
    display: block;
    text-align: center;
    `}
`;

export const Home = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: auto;
  font-family: 'Eagle Lake', cursive;
  font-weight: bold;
  font-size: 24px;
  color: #000;

  left: 50px;
  position: absolute;
  display: block;
  transform: translateY(-50%);
`;

export const Navigation = styled.div`
${props => {
    if (props.toggle === true) {
      return media.tablet`
              display: block;
              padding: 0px;
              background: #fff;
              width: 100%;
              min-height: 35vh;
              z-index: 1;
              `
    }
}}`;

// ${media.tablet`display: none`}
export const NavigationRight = styled.div`
  margin-top: -2px;
  padding: 10px;
  top: 50%;
  position: absolute;
  left: 300px;
  transform: translateY(-50%);

  ${media.tablet`
    display: ${props => props.toggle};
    left: 0px;
    top: 20px;
    padding: 0;
    position: relative;
    transform: translateY(0);
    `}
`;

const rotate180 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`

export const MenuArrow = styled.div`
  display: none;

  width: 40px;
  height: 40px;
  position: absolute;
  top: 30px;
  right: 20px;

  ${media.tablet`
    display: flex
    justify-content: center;
    align-items: center;
    overflow: hidden;
    onclick {
      animation: ${rotate180} 0.2s
    }
    `}
`;
