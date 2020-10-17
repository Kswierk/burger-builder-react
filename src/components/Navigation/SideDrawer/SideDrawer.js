import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styled from "styled-components";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary";

const SideDrawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${(props) =>
    props.opened ? "translateX(0)" : "translateX(-100%)"};

  @media (min-width: 500px) {
    display: none;
  }
`;
const LogoWraper = styled.div`
  height: 11%;
  margin-bottom: 32px;
`;

const sideDrawer = (props) => {
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <SideDrawer opened={props.opened} onClick={props.closed}>
        <LogoWraper>
          <Logo />
        </LogoWraper>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </SideDrawer>
    </Auxiliary>
  );
};

export default sideDrawer;
