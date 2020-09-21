import React, { Component } from "react";
import Aux from "../Auxiliary";
import styled from "styled-components";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const StyledMainContent = styled.main`
  margin-top: 72px;
`;

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          opened={this.state.showSideDrawer ? true : false}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <StyledMainContent>{this.props.children}</StyledMainContent>
      </Aux>
    );
  }
}

export default Layout;
