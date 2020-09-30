import React from "react";
import styled from "styled-components";

const InputWraper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const InputElement = styled.input`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;
const TextArea = styled.textarea`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;

const SelectElement = styled.select`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;

const input = (props) => {
  let inputElement = null;

  let invalidStyle = "1px solid gray";

  if (props.invalid && props.touched) {
    invalidStyle = "1px solid salmon";
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <InputElement
          style={{ border: invalidStyle }}
          {...props.elementConfig}
          defaultValue={props.defaultValue}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextArea
          {...props.elementConfig}
          defaultValue={props.defaultValue}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <SelectElement
          defaultValue={props.defaultValue}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option
              key={option.defaultValue}
              defaultValue={option.defaultValue}
            >
              {option.displayValue}
            </option>
          ))}
        </SelectElement>
      );
      break;
    default:
      inputElement = (
        <InputElement
          {...props.elementConfig}
          defaultValue={props.defaultValue}
          onChange={props.changed}
        />
      );
  }

  return (
    <InputWraper>
      <Label>{props.label}</Label>
      {inputElement}
    </InputWraper>
  );
};

export default input;
