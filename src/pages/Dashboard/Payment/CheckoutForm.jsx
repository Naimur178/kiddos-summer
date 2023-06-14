import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
  };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/2"
            src="https://img.freepik.com/free-vector/hand-holding-phone-with-credit-card-screen-man-making-purchase-shopping-paying-online-using-banking-app-flat-vector-illustration-transaction-e-commerce-concept_74855-26014.jpg?w=1060&t=st=1686718947~exp=1686719547~hmac=be0a8d698ed7418b22ffb5b929ce2306ca67637f8721590762ab5e2e0aab6c2b"
          />
        </figure>
        <div className="card-body">
          
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="">
        <button className="btn btn-outline btn-sm mt-5" type="submit" disabled={!stripe}>
          Pay
        </button>
        </div>
      </form>
          
        </div>
      </div>
      
    </div>
  );
};

export default CheckoutForm;
