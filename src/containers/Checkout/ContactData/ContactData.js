import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styled from "styled-components";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

const Data = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const Input = styled.input`
  display: block;
`;

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    adress: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    // alert("You continue");
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Kacper Swierk",
        adress: {
          street: "test-street",
          zipCode: "30-301",
          country: "Poland",
        },
        email: "test@test.pl",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/order.json", order)
      .then(
        (response) => this.setState({ loading: false }),
        this.props.history.push("/")
      )
      .catch((error) => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form>
        <Input type="text" name="name" placeholder="Your name" />
        <Input type="email" name="email" placeholder="Your email" />
        <Input type="text" name="street" placeholder="Street" />
        <Input type="text" name="postal" placeholder="Postal Code" />
        <Button clicked={this.orderHandler}>Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <Data>
        <h4>Enter your contact data</h4>
        {form}
      </Data>
    );
  }
}

export default ContactData;
