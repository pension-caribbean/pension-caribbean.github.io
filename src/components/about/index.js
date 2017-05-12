import React from 'react';
import Sections from './sections';

const links = [
  {
    href: '#',
    id: 'id',
    title: '캐리비안 소개',
  },
  {
    href: '#around',
    id: 'around',
    title: '주변환경',
  },
  {
    href: '#navigation',
    id: 'navigation',
    title: '오시는 길',
  },
]

const About = () => {
  return (
    <div>
      <Sections links={links}/>
    </div>
  );
};

export default About;