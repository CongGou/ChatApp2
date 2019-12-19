import React from "react";
import styled from "styled-components";

const MessageLogo = props => (
  <Cover>
    <Logo src={require("../images/logo.png")} />
  </Cover>
);

export default MessageLogo;

const Cover = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
