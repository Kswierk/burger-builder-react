import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationItem = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 25px;

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
  }
`;

const NavigationLink = styled(NavLink)`
  color: #8f5c2c;
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 10px 0 10px;

  @media (min-width: 500px) {
    color: white;
    text-decoration: none;
    margin-right: 20px;
  }

  :hover,
  :active {
    color: #40a4c8;
    background-color: rgba(125, 127, 135, 0.4);
    border-bottom: 2px solid #40a4c8;
  }

  &.active {
    color: #40a4c8;
    background-color: rgba(125, 127, 135, 0.4);
    border-bottom: 2px solid #40a4c8;
  }
`;

const navigationItem = (props) => (
  <NavigationItem>
    <NavigationLink exact={props.exact} to={props.link}>
      {props.children}
    </NavigationLink>
  </NavigationItem>
);

export default navigationItem;
