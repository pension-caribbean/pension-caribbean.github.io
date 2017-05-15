import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { media } from '../../styles/utils';

const UL = styled.ul`
  margin: 0 100px 0 30px;
  padding: 0;
  list-style: none;

  ${media.phone`
    text-align: center;
    margin: 0 0 30px 0;
  `}
`

const LI = styled.li`
  vertical-align: middle;
  height: 20px;
  line-height: 20px;
  margin-right: 15px;
  
  ${media.phone`
    display: inline;
  `}
`

const LINK = styled(Link)`
  color: #666;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  margin-right: 15px;

  &:hover {
    color: white;
  }
`

const NavigationComponent = () => {
  return (
    <UL>
      <LI><LINK to="/">Home</LINK></LI>
      <LI><LINK to="/about">About</LINK></LI>
      <LI><LINK to="/blog">Blog</LINK></LI>
    </UL>
  );
};

export default NavigationComponent;