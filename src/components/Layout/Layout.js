import React from "react";
import Aux from "../../hoc/Auxiliary";
import styled from "styled-components";

const StyledMainContent = styled.main`
  margin-top: 16px;
`;

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <StyledMainContent>{props.children}</StyledMainContent>
  </Aux>
);

export default layout;
