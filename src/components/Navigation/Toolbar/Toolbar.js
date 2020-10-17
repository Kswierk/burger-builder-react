import React from "react";
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const StyledToolbar = styled.div`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const StyledNav = styled.nav`
  height: 100%;
  display: none;

  @media (min-width: 500px) {
    display: block;
  }
`;

const LogoWraper = styled.div`
  height: 80%;
`;

const toolbar = (props) => (
  <StyledToolbar>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <LogoWraper>
      <Logo>LOGO</Logo>
    </LogoWraper>
    <StyledNav>
      <NavigationItems isAuthenticated={props.isAuth} />
    </StyledNav>
  </StyledToolbar>
);

export default toolbar;
