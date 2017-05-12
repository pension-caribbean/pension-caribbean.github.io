import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Section, SectionHeader } from '../../sections';
import { Screen, Wrap } from '../../screens';
import './section_first.css';


const images = [
  {
    original: require('./caribbean01.jpg'),
  },
  {
    original: require('./caribbean02.jpg'),
  },
  {
    original: require('./caribbean03.jpg'),
  },
  {
    original: require('./caribbean04.jpg'),
  },
]

const SectionFirst = ({href, id, title}) => {
  return (
    <Section>
      <Screen style={{minHeight: 'calc(100vh - 125px)'}}>
        <Wrap>
          <SectionHeader title={title} href={href} id={id}/>
          <div>
            85평형 잔디정원 독채펜션 캐러비안
            18~20명의 대형 팬션
          </div>
          <div>
            <ImageGallery
              items={images}
              slideInterval={4000}
              slideDuration={600}
              showBullets={true}
              showThumbnails={false}
              showIndex={true}
              autoPlay={true}
            />
          </div>
          <SectionHeader title={title} href={href} id={id}/>
        </Wrap>
      </Screen>
    </Section>
  );
};

export default SectionFirst;