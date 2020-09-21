import React from "react";
import img from "../../assets/images/burger-logo.png";
import styled from "styled-components";

const LogoContainer = styled.div`
  background-color: #ffffff;
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Logo = styled.img`
  height: 100%;
`;

const logo = (props) => (
  <LogoContainer>
    <Logo style={{ height: props.height }} alt="logo" src={img} />
  </LogoContainer>
);

export default logo;
