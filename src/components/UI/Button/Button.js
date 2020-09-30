import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.danger ? "red" : "green")};
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  text-transform: uppercase;

  :first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const button = (props) => (
  <StyledButton
    disabled={props.disabled}
    danger={props.danger}
    onClick={props.clicked}
  >
    {props.children}
  </StyledButton>
);

export default button;
