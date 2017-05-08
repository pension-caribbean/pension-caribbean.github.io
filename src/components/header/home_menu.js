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
  font-size: 25px;
  color: #000;
`;

const HomeMenuDiv = styled.div`
  display: block;
  position: relative;
  width: 180px;
  height: 40px;

  padding: 10px;

  ${media.tablet`
    margin-left: 20px;
  `}
`;

const HomeMenuComponent = ({to, label, linkClick}) => {
  return (
    <HomeMenuDiv className='home'>
      <StyledNavLink to={to} onClick={linkClick}>{label}</StyledNavLink>
    </HomeMenuDiv>
  );
};

export default HomeMenuComponent;
