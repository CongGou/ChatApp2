import React from "react";
import styled from "styled-components";
function Friends(props) {
  return (
    <Container>
      <Image src={props.image} />
      <Cover>
        <UserName>{props.UserName}</UserName>
      </Cover>
    </Container>
  );
}
export default Friends;

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
  line-height: 40px;
`;
const UserName = styled.span`
  font-size: 14px;
`;
