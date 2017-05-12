import React from 'react';
import styled from 'styled-components';

import facebook from './facebook.svg'

const Right = styled.div`
  text-align: right;
  color: #666;
  font-size: 12px;
  flex-grow: 2;
`

const Contact = styled.span`
  display: block;
  margin: 0 0 10px 0;
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
  display: inline-block;
  width: 24px;
  height: 24px;
`

const RightComponent = () => {
  return (
    <Right className="right">
      <Contact>
        <UL>
          <LI><A href="https://facebook.com" target="_blank"><img src={facebook} alt="facebook"/></A></LI>
        </UL>
      </Contact>
    </Right>
  );
};

export default RightComponent;