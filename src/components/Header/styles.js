import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DHeader = styled.div`
  margin: auto;
  max-width: 900px;
  padding: 30px 0;
`;


export const HLink = styled(Link)`
  padding: 10px;
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
`;

export const Home = styled(HLink)`
  font-size: 20px;
`;

export const Navigation = styled.div`
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const NavigationRight = styled(Navigation)`
  left: 200px;
`;

export const DNav = styled.div``;
