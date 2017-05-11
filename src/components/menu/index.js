import React from 'react';
import styled from 'styled-components';
import { Sticky, StickyContainer } from 'react-sticky';
import { media } from '../../styles/utils';

export const DD = styled.div`
  ${media.tablet`
    display: none;
  `}
`

export const StyledSticky = styled(Sticky)`

  ${media.tablet`
    display: none;
  `}
`

const Menu = () => {
  return (
    <div>
      Menu
    </div>
  );
};

const StickyConn = () => {
  return (
    <div>
      Menu
    </div>
  );
};

export const StyledStickyContainer = styled(StickyContainer)`
  background-color: #999;
`;
