import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../styles/utils';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  cursor: auto;
  font-family: 'Eagle Lake', cursive;
  font-weight: bold;
  font-size: 15px;
  color: white;
`;

const HomeMenuDiv = styled.div`
  margin-right: 20px;
  width: 120px;
  height: 27px;
  padding: 1px;

  ${media.phone`
    margin-bottom: 30px;
    text-align: center;

    width: calc(100% - 15px);
    height: none;
  `}
`;

const HomeMenuComponent = ({to, label}) => {
  return (
    <HomeMenuDiv className='home'>
      <StyledNavLink to={to}>{label}</StyledNavLink>
    </HomeMenuDiv>
  );
};

export default HomeMenuComponent;
