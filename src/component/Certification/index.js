import React, { Component } from "react";
import styled from "styled-components";
class Certification extends Component {
  handleClick = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <Container>
        <Cover>
          <UserName>郭海聪</UserName>
          <Image src={require("../images/WechatIMG2.jpeg")} />
        </Cover>
        <Account>
          账&nbsp;&nbsp;&nbsp;&nbsp;号&nbsp;&nbsp;&nbsp;&nbsp;1231
        </Account>
        <Through onClick={this.handleClick}>通过认证</Through>
      </Container>
    );
  }
}
export default Certification;
const Container = styled.div`
  width: 310px;
  height: 535px;
  padding: 70px 95px;
`;
const Cover = styled.div`
  position: relative;
  width: 100%;
  height: 99px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;
const UserName = styled.h2`
  color: #000;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;
const Account = styled.span`
  color: #bcbcbc;
`;
const Through = styled.a`
  display: block;
  margin: 80px 60px;
  width: 140px;
  height: 40px;
  border-radius: 5px;
  background: #53ae1d;
  text-align: center;
  color: #fff;
  line-height: 40px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
`;
