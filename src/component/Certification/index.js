import React, { Component } from "react";
import styled from "styled-components";
import { User, AddPass } from "../Axios";
//认证组件
class Certification extends Component {
  constructor(arg) {
    super(arg);
    this.state = {
      photo: "",
      userName: "",
      _id: "",
      msg: "通过认证"
    };
  }
  handleClick = () => {
    let id = this.state._id;
    AddPass({ id }).then(res => {
      if (res.data.code === 200) {
        this.setState({
          msg: res.data.msg
        });
      }
    });
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    User({ id }).then(res => {
      this.setState({
        photo: res.data.data.photo,
        userName: res.data.data.userName,
        _id: res.data.data._id
      });
    });
  }
  render() {
    return (
      <Container>
        <Cover>
          <UserName>{this.state.userName}</UserName>
          <Image src={this.state.photo} />
        </Cover>

        <Account>
          账&nbsp;&nbsp;&nbsp;&nbsp;号&nbsp;&nbsp;&nbsp;&nbsp;
          {this.state.userName}
        </Account>
        <Through onClick={this.handleClick}>{this.state.msg}</Through>
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
