import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {CardElement, injectStripe} from 'react-stripe-elements';

const PaymentForm = () => {
  return (
    <div className="checkout">
      <p>Payment:</p>
      <CardElement />
      <Button type="submit" variant="primary">
        Send Good Fortune
      </Button>
    </div>
  );
}

export default injectStripe(PaymentForm);
