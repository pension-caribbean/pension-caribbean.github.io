import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Section, SectionHeader } from '../sections';
import { Screen, Wrap } from '../screens';
import './section_first.css';


const images = [
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/2/',
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/3/',
  }
]

/*const SectionFirst = ({href, id, title}) => {
  return (
    <Section>
      <Screen style={{minHeight: 'calc(100vh - 125px)'}}>
        <Wrap>
          <SectionHeader title={title} href={href} id={id}/>
          <div>
            85평형 잔디정원 독채펜션 캐러비안
            18~20명의 대형 팬션
          </div>
        </Wrap>
      </Screen>
    </Section>
  );
};*/

class SectionFirst extends React.Component {

  render() {
    return (
      <Section>
        <Screen style={{minHeight: 'calc(100vh - 125px)'}}>
          <Wrap>
            <SectionHeader title={this.props.title} href={this.props.href} id={this.props.id}/>
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
          </Wrap>
        </Screen>
      </Section>
    )
  }
}

export default SectionFirst;