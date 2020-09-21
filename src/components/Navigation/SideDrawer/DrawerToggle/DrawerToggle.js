import React from "react";
import styled from "styled-components";

const BurgerWraper = styled.div`
  position: relative;
  height: 20px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media (min-width: 500px) {
    display: none;
  }
`;

const BurgerLine = styled.div`
  display: block;
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 3px;
`;

const drawerToggle = (props) => (
  <BurgerWraper onClick={props.clicked}>
    <BurgerLine />
    <BurgerLine />
    <BurgerLine />
  </BurgerWraper>
);

export default drawerToggle;
