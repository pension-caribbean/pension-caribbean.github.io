import React from 'react';
import styled from 'styled-components';
import { Sticky } from 'react-sticky';
import { MenuWrap, MenuInner } from '.';

const H2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  padding-left: 15px;
  transition: all;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  flex: 0.2
`;

const Menu = ({title, links}) => {
  return (
    <MenuWrap>
      <MenuInner>
        <Sticky>
        {
          ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
            console.log(isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight);
            return (
              <div>
                <H2>{title}</H2>

              </div>
            )
          }
        }
        </Sticky>
      </MenuInner>
    </MenuWrap>
  );
};

export default Menu;