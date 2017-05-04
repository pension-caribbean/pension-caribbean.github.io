import React, { Component } from 'react';
import {
  DHeader,
  HLink,
  Home,
  Navigation,
  NavigationRight,
  MenuArrow
} from './styles';
import Arrow from './arrow.svg';

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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    console.log(this.state.isToggleOn);
  }

  render() {
    return (
      <DHeader>
        <Home to="/">Caribbean</Home>
        <Navigation toggle={this.state.isToggleOn}>
          <NavigationRight toggle={this.state.isToggleOn ? 'block' : 'none'}>
            {links.map((link, index) => (<HLink to={link.path}>{link.text}</HLink>))}
          </NavigationRight>
        </Navigation>
        <MenuArrow onClick={this.handleClick} toggle={this.state.isToggleOn}><img src={Arrow} alt="menu-arrow" /></MenuArrow>
      </DHeader>
    );
  }
}

export default Header;
