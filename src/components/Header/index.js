import React, { Component } from 'react';
import styled from 'styled-components';
import NavigationContainer from './navigation_container';
import Navigation from './navigation';
import HomeMenu from './home_menu';
import Link from './link';
import Arrow from './arrow';

const links = [
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/blog',
    text: 'Blog',
  },
  {
    path: '/facility',
    text: 'Facility',
  },
  {
    path: '/service',
    text: 'Service',
  },
  {
    path: '/reservation',
    text: 'Reservation',
  },
  {
    path: '/tour',
    text: 'Tour',
  },
]

const Header = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 30px 0;
  position: relative;
`

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {toggle: NaN};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.linkClick = this.linkClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  linkClick() {
    this.setState({
      toggle: NaN
    });
  }

  render() {
    return (
      <Header className='header'>
        <HomeMenu label='Caribbean' to='/' linkClick={this.linkClick}/>
        <NavigationContainer className='nav-container' toggle={this.state.toggle}>
          <Navigation toggle={this.state.toggle}>
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                label={link.text}
                linkClick={this.linkClick}/>
              ))}
          </Navigation>
        </NavigationContainer>
        <Arrow toggle={this.state.toggle} handleClick={this.handleClick}/>
      </Header>
    );
  }
}

export default HeaderComponent;
