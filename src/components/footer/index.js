import React from 'react';
import styled from 'styled-components';
import HomeMenu from './home_menu';

import Wrapper from './wrapper';
import Navigation from './navigation';
import Right from './right';

const Footer = styled.footer`
  background: #000;
  left: 0;
  right: 0;
  position: absolute;

  text-rendering: optimizeLegibility;
  text-align: left;
`

const FooterComponent = () => {
  return (
    <Footer>
      <Wrapper>
        <HomeMenu label='Caribbean' to='/'/>
        <Navigation />
        <div class="right" data-jsx="4045275403">
          <span class="contact" data-jsx="4045275403">
            </span>
        </div>
        <Right />
      </Wrapper>
    </Footer>
  );
};

export default FooterComponent;