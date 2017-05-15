import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/utils';
import ImageChanger from '../img_changer';

import facebook_gray from './facebook_gray.svg'
import facebook_white from './facebook_white.svg'

const Right = styled.div`
  text-align: right;
  color: #666;
  font-size: 11px;
  flex-grow: 2;
`

const Contact = styled.span`
  display: block;
  margin: 0 0 10px 0;

  ${media.phone`
    text-align: center;
  `}
`

const Copyright = styled.span`
  display: block;

  ${media.phone`
    text-align: center;
  `}
`

const UL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: -webkit-inline-flex;
  display: inline-flex;
`

const LI = styled.li`
  margin-right: 15px;
  border-right: 1px solid #333;
  height: 26px;
  line-height: 24px;
  padding-right: 15px;
`

const A = styled.a`
  display: block;

  text-decoration: none;
  font-size: 13px;
  color: #666;

  &:hover {
    color: #FFF;
  }
`

const RightComponent = () => {
  return (
    <Right className="right">
      <Contact>
        <UL>
          <LI><A href="https://facebook.com" target="_blank"><ImageChanger overImg={facebook_white} outImg={facebook_gray} alt="facebook"/></A></LI>
          <A href="mailto:pension.caribbean@gmail.com">pension.caribbean@gmail.com</A>
        </UL>
      </Contact>
      <Copyright>
        <span class="text">Copyright</span>©2017 Hare. All rights reserved.
      </Copyright>
    </Right>
  );
};

export default RightComponent;