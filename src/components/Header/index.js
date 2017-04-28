import React, { Component } from 'react';
import {
  DHeader,
  HLink,
  Home,
  Navigation,
  NavigationRight
} from './styles';

class Header extends Component {
  render() {
    return (
      <DHeader>
        <Navigation>
          <Home to="/">Caribbean</Home>
          <NavigationRight>
            <HLink to="/about">About</HLink>
            <HLink to="/blog">Blog</HLink>
            <HLink to="/facility">Facility</HLink>
            <HLink to="/service">Service</HLink>
            <HLink to="/reservation">Reservation</HLink>
            <HLink to="/tour">Tour</HLink>
          </NavigationRight>
        </Navigation>
      </DHeader>
    );
  }
}

export default Header;
