import React, { Component } from "react";
import styled from "styled-components";
class GroupChat extends Component {
  render() {
    return (
      <div className="GroupChat">
        <Container>
          <Cover>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <Image src={require("../images/WechatIMG2.jpeg")} key={index} />
            ))}
          </Cover>
          <Title>工大穗子dsadasda</Title>
          <JionMessage>进入群聊</JionMessage>
        </Container>
      </div>
    );
  }
}
export default GroupChat;
const Container = styled.div`
  width: 310px;
  height: 535px;
  padding: 70px 95px;
  overflow: hidden;
`;
const Cover = styled.div`
  width: 111px;
  height: 102px;
  border-radius: 2px;
  background: #dedfdf;
  padding: 5px 0 5px 5px;
  margin-left: 90px;
`;
const Image = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;
const Title = styled.h2`
  width: 112px;
  margin-left: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const JionMessage = styled.a`
  display: block;
  margin: 80px 80px;
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
