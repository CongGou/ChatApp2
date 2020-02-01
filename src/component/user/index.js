import React, { useState, useEffect } from "react";
import styled from "styled-components";
// 新朋友添加组件
// const [certification]
const NewUser = props => (
  <Container>
    <Image src={props.photo} />
    <Cover>
      <UserName>{props.userName}</UserName>
      <Conter>请求通过认证</Conter>
    </Cover>
    <Certification>等待认证</Certification>
  </Container>
);
export default NewUser;

const Container = styled.div`
  position: relative;
  width: 240px;
  height: 46px;
  display: flex;
  color: #000;
  font-size: 13px;
  padding: 10px 10px;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
`;
const Cover = styled.div`
  margin-left: 10px;
`;
const UserName = styled.span``;
const Conter = styled.p`
  margin: 0;
  color: #888888;
`;
const Certification = styled.span`
  position: absolute;
  right: 10px;
  color: #888888;
`;
