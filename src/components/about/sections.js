import React from 'react';
import { Sections } from '../sections';
import SectionFirst from './section_first';
import SectionSecond from './section_second';
import SectionThird from './section_third';


const AboutSections = ({links}) => {
  return (
    <Sections>
      <SectionFirst href={links[0].href} title={links[0].title} id={links[0].id} />
      <SectionSecond href={links[1].href} title={links[1].title} id={links[1].id} />
      <SectionThird href={links[2].href} title={links[2].title} id={links[2].id} />
    </Sections>
  );
};

export default AboutSections;