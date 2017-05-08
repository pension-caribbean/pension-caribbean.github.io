import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/utils';
import arrow from './arrow.svg';
import './arrow.css';

const MenuArrow = styled.div`
  display: none;

  width: 40px;
  height: 40px;
  margin: 10px;
  
  ${media.tablet`
    position: absolute;
    top: 50px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    `}
`;

const Arrow = ({toggle, handleClick}) => {
  let className = '';
  if (!isNaN(toggle)) {
    className = toggle ? 'arrow-up' : 'arrow-down';
  }

  return (
    <MenuArrow
      className={className}
      onClick={handleClick}
    >
      <img src={arrow} alt="menu-arrow" />
    </MenuArrow>
  );
};

export default Arrow;
