import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../styles/utils';

 const StyledNavLink = styled(NavLink)`
  padding: 10px 25px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: auto;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 13px;
  color: #999;

  &:hover {
    color: #000;
  }

  ${media.tablet`
    padding: 15px 10px;
    font-weight: normal;
    font-size: 20px;
    display: block;
    text-align: center;
    `}
`;

class LinkComponent extends Component {
  render() {
    return (
      <StyledNavLink
        to={this.props.to}
        activeStyle={{
          color: 'black'
        }}
        onClick={this.props.linkClick}
      >
        {this.props.label}
      </StyledNavLink>
    );
  }
};

export default LinkComponent;
