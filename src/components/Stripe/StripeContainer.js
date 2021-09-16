import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51J2zN1BheQMru7CfehgdBWKYX2X21WDg8jjlrQPFYdqZPnpTXanEqbe9o3yybyOGqwiisOsKBT5IXB8D5K66RlFf00RjGv8upN";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
