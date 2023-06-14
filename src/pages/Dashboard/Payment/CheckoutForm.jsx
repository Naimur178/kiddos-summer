import React from "react";
import PageCover from "../../../shared/PageCovers/PageCovers";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
const img = "../../../../public/Polygon Luminary.svg";

const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card == null){
            return;
        }

    }

  return (
    <div className="text-center">
      <PageCover img={img} title={"Proceed to Pay"}></PageCover>
      <div className="card lg:card-side bg-base-100 shadow-xl lg:mt-36 w-11/12 mx-auto">
        <figure>
          <img className=""
            src="https://img.freepik.com/free-vector/hand-holding-phone-with-credit-card-screen-man-making-purchase-shopping-paying-online-using-banking-app-flat-vector-illustration-transaction-e-commerce-concept_74855-26014.jpg?w=1060&t=st=1686718947~exp=1686719547~hmac=be0a8d698ed7418b22ffb5b929ce2306ca67637f8721590762ab5e2e0aab6c2b"
            alt="Album"
          />
        </figure>
        <div className="card-body bg-base-200 w-1/2">
        <form onSubmit={}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
         
        </div>
      </div>
    </div>
  );
};

export default Payment;
