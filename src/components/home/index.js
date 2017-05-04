import React from 'react';
import {
  Content,
  FirstModule,
  SecondModule,
  ArrowDiv
} from './styles';
import Arrow from './arrow.svg';

const Home = () => {
  return (
    <Content>
      <FirstModule>
        First!
        <ArrowDiv><img src={Arrow} alt="Arrow" /></ArrowDiv>
      </FirstModule>
      <SecondModule>
        Second
      </SecondModule>
    </Content>
  );
};

export default Home;
