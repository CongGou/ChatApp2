import React from "react";
import styled from "styled-components";
const MessageList = props => {
  return (
    <Container>
      <Image src={props.image} />
      <Cover>
        <Title>{props.title}</Title>
        <Content>
          {props.user}：{props.content}
        </Content>
      </Cover>
    </Container>
  );
};
// const MessageList = props => (

// );
export default MessageList;

const Container = styled.div`
  display: flex;
  width: 240px;
  height: 45px;
  padding: 15px 10px;
  border-bottom: 1px solid #dedede;
  color: #000;
`;
const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 2px;
  background: #fff;
`;
const Cover = styled.div`
  margin-left: 5px;
`;
const Title = styled.p`
  margin: 0;
  width: 130px;
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Content = styled.span`
  display: inline-block;
  width: 130px;
  height: 20px;
  color: #b5b5b5;
  font-size: 12px;
  white-space:nowrap
  overflow: hidden;
  text-overflow:ellipsis;
`;
