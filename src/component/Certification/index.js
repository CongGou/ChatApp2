import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { User, AddPass } from "../Axios";
import { Context } from "../../App";
//认证组件
const Certification = (props) => {
  const CertificationData = useContext(Context);
  const userData = CertificationData.state.Certification;
  //认证通过后按钮内容修改
  const handleClick = () => {
    let id = userData.data._id;
    AddPass({ id }).then((res) => {
      if (res.data.code === 200) {
        CertificationData.dispatch({
          type: "GET_CERTIFICATION",
          Certification: {
            data: userData.data,
            msg: res.data.msg,
          },
        });
      }
    });
  };
  useEffect(() => {
    // console.log(props)
    const id = setInterval(() => {
      let id = props.match.params.id;
      //还没写完认证出现问题重新修改明天
      User({ id }).then((res) => {
        if (res) {
          CertificationData.dispatch({
            type: "GET_CERTIFICATION",
            Certification: {
              data: res.data.data,
              msg: "已通过",
            },
          });
        }
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [props.match.params.id, CertificationData]);
  return (
    <Container>
      <Cover>
        <UserName>{userData.data.userName}</UserName>
        <Image src={userData.data.photo} />
      </Cover>

      <Account>
        账&nbsp;&nbsp;&nbsp;&nbsp;号&nbsp;&nbsp;&nbsp;&nbsp;
        {userData.data.userName}
      </Account>
      <Through onClick={handleClick}>{userData.msg || "通过认证"}</Through>
    </Container>
  );
};

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
