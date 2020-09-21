import React from "react";
import styled from "styled-components";

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
    align-items: center;
  }
`;

const NavigationLink = styled.a`
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 500px) {
    color: white;
    text-decoration: none;
  }

  :hover,
  :active {
    color: #40a4c8;
  }
`;

const navigationItem = (props) => (
  <NavigationItem>
    <NavigationLink href={props.link}>{props.children}</NavigationLink>
  </NavigationItem>
);

export default navigationItem;
