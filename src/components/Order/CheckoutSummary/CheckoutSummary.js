import React from "react";
import styled from "styled-components";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 600px) {
    /* width: 500px; */
  }
`;

const checkoutSummary = (props) => {
  return (
    <CheckoutSummary>
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button danger clicked={props.onCheckoutCancelled}>
        Cancel
      </Button>
      <Button clicked={props.onCheckoutContinued}>Continue</Button>
    </CheckoutSummary>
  );
};

export default checkoutSummary;
