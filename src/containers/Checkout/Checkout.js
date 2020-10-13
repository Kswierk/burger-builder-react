import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import ContactData from "./ContactData/ContactData";
// import { statSync } from "fs-extra";

class Checkout extends Component {
  componentWillMount() {
    this.props.onInitPurchase();
  }

  onCheckoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  onCheckoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            onCheckoutCancelled={this.onCheckoutCancelledHandler}
            onCheckoutContinued={this.onCheckoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitPurchase: () => dispatch(actions.purchaseInit),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
