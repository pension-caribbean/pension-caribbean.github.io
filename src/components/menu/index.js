import styled from 'styled-components';
import { StickyContainer } from 'react-sticky';
import { media } from '../../styles/utils';
import Menu from './menu';

export { Menu };

export const MenuWrap = styled.div`height: 48px;margin-top: -20px;`

export const MenuInner = styled.div`
  background-color: #990;

  max-width: 900px;
  z-index: 1100;
  height: 48px;
  margin: auto;
  display: flex;
  padding: 15px 0;

  ${media.tablet`
    display: none;
  `}
`

export const MenuContainer = styled(StickyContainer)`
`;
