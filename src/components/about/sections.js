import React from 'react';
import { Sections } from '../sections';
import SectionFirst from './section_first';
import SectionSecond from './section_second';
import SectionThird from './section_third';


const AboutSections = () => {
  return (
    <div>
      <Sections>
        <SectionFirst />
        <SectionSecond />
        <SectionThird />
      </Sections>
    </div>
  );
};

export default AboutSections;