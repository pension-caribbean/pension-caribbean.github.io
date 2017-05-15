import React, { Component } from 'react';

class ImageChanger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);

    this.overImg = props.overImg;
    this.outImg = props.outImg;
    this.alt = props.alt;
  }

  mouseOver() {
    this.setState({ hover: true });
  }

  mouseOut() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div className="img changer" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <img src={this.state.hover ? this.overImg : this.outImg} alt={this.alt} />
      </div>
    );
  }
}

export default ImageChanger;