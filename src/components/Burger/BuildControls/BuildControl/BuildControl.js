import React from "react";
import styled from "styled-components";

const BuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const Label = styled.label`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

const MoreBtn = styled.button`
  background-color: #8f5e1e;
  color: white;
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;

  :disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  :hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }

  :hover,
  :active {
    background-color: #99703f;
    color: white;
  }
`;

const LessBtn = styled.button`
  background-color: #d39952;
  color: white;
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;

  :disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  :hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }

  :hover,
  :active {
    background-color: #daa972;
    color: white;
  }
`;

const buildControl = (props) => (
  <BuildControl>
    <Label>{props.label}</Label>
    <LessBtn onClick={props.removed} disabled={props.disabled}>
      Less
    </LessBtn>
    <MoreBtn onClick={props.added}>More</MoreBtn>
  </BuildControl>
);

export default buildControl;
