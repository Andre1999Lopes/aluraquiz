import styled from 'styled-components';
import React from 'react';

const AnimationDiv = styled.div`
  @keyframes loading {
    0% {
      opacity: 1;
      backface-visibility: hidden;
      transform: translateZ(0) scale(1.55,1.55);
    } 100% {
      opacity: 0;
      backface-visibility: hidden;
      transform: translateZ(0) scale(1,1);
    }
  }
  & div > div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #d88c51;
    animation: loading 1s linear infinite;
  }& div:nth-child(1) > div {
    left: 152px;
    top: 92px;
    animation-delay: -0.9s;
  }
  & > div:nth-child(1) {
    transform: rotate(0deg);
    transform-origin: 160px 100px;
  }& div:nth-child(2) > div {
    left: 141px;
    top: 127px;
    animation-delay: -0.8s;
  }
  & > div:nth-child(2) {
    transform: rotate(36deg);
    transform-origin: 149px 135px;
  }& div:nth-child(3) > div {
    left: 111px;
    top: 149px;
    animation-delay: -0.7s;
  }
  & > div:nth-child(3) {
    transform: rotate(72deg);
    transform-origin: 119px 157px;
  }& div:nth-child(4) > div {
    left: 73px;
    top: 149px;
    animation-delay: -0.6s;
  }
  & > div:nth-child(4) {
    transform: rotate(108deg);
    transform-origin: 81px 157px;
  }& div:nth-child(5) > div {
    left: 43px;
    top: 127px;
    animation-delay: -0.5s;
  }
  & > div:nth-child(5) {
    transform: rotate(144deg);
    transform-origin: 51px 135px;
  }& div:nth-child(6) > div {
    left: 32px;
    top: 92px;
    animation-delay: -0.4s;
  }
  & > div:nth-child(6) {
    transform: rotate(180deg);
    transform-origin: 40px 100px;
  }& div:nth-child(7) > div {
    left: 43px;
    top: 57px;
    animation-delay: -0.3s;
  }
  & > div:nth-child(7) {
    transform: rotate(216deg);
    transform-origin: 51px 65px;
  }& div:nth-child(8) > div {
    left: 73px;
    top: 35px;
    animation-delay: -0.2s;
  }
  & > div:nth-child(8) {
    transform: rotate(252deg);
    transform-origin: 81px 43px;
  }& div:nth-child(9) > div {
    left: 111px;
    top: 35px;
    animation-delay: -0.1s;
  }
  & > div:nth-child(9) {
    transform: rotate(288deg);
    transform-origin: 119px 43px;
  }& div:nth-child(10) > div {
    left: 141px;
    top: 57px;
    animation-delay: 0s;
  }
  & > div:nth-child(10) {
    transform: rotate(324deg);
    transform-origin: 149px 65px;
  }
  & {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  & div { box-sizing: content-box; }
`;

// paleta de cores: 1d0e0b, #774023, #d88c51, #f3e7c9, #fff9f5

export default function LoadingAnimation() {
  return (
    <div style={{
      width: '200px', height: '200px', display: 'inline-block', overflow: 'hidden', background: 'none',
    }}
    >
      <AnimationDiv>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
        <div><div /></div>
      </AnimationDiv>
    </div>
  );
}
