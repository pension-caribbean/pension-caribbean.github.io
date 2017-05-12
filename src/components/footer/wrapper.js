import styled from 'styled-components';
import { media } from '../../styles/utils';

export default styled.div`
  display: flex;
  vertical-align: top;
  justify-content: center;
  padding: 40px 0;
  width: 900px;
  margin: auto;

  color: #999;

  ${media.desktop`
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
  `}

  ${media.tablet`
    display: block;
  `}
`