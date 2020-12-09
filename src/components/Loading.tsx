import React from 'react';
import styled, { keyframes } from 'styled-components';

const loaderOuter = keyframes`

0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }

`;
const loaderInner = keyframes`

  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }

`;

const Outer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  position: relative;
  border: 4px solid #242f3f;
  border-radius: 7px;
  top: -20%;
  animation: ${loaderOuter} 2s infinite ease;
`;

const Inner = styled.span`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #242f3f;
  animation: ${loaderInner} 2s infinite ease-in;
`;

interface Props {}

const Loading: React.FC<Props> = () => {
  return (
    <Outer>
      <Inner />
    </Outer>
  );
};

export default Loading;
