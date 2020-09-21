import React from "react";
import styled from "styled-components";
import NavigationItem from "./NavigationItem/NavigationItem";

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

const navigationItems = () => (
  <StyledUl>
    <NavigationItem link="/">Burger builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </StyledUl>
);

export default navigationItems;
