import styled from 'styled-components';
import { media } from '../../styles/utils';

export default styled.div`
  ${props => {
    if (props.toggle === true) {
      return media.tablet`
        padding: 20px 0;
        width: 100%;
        min-height: 90vh;
        z-index: 1;
      `
    }
  }}
`;
