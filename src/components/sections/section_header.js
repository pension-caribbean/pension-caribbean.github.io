import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`color: #000;font-size: 24px;margin: 20px 0;`
const A = styled.a`border-bottom: 1px solid transparent;color: inherit;margin-right: 10px;text-decoration: none;
&:hover {border-bottom-color: inherit;}
`


const SectionHeader = ({title, href, id}) => {
  return (
    <H2>
      <span id={id}></span>
      <A href={href}>{title}</A>
    </H2>
  );
};

export default SectionHeader;