import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useState } from "react";

// import "./Checkout.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import useCart from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cart, refetch] = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const courseId = new URLSearchParams(location.search).get("courseId");
  console.log(courseId)
  const this_course = cart.find(course => course._id == courseId)
console.log(this_course)
    const {price, courseTitle, courseImage } =this_course;
    const navigate = useNavigate();


  useEffect(() => {
    if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }
}, [price, axiosSecure])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }
    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            },
        },
    );

    if (confirmError) {
        console.log(confirmError);
    }
    console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                courseTitle,
                courseImage,
                date: new Date(),
                status: 'service pending',
                id: this_course._id,
                cId: this_course.menuItemId
            }
            
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult
                        .insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                              })
                              navigate('/dashboard/mycart')
                              

                        
                    }
                })
               
        }


  };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl my-5 mb-16">
        <figure>
          <img
            className="w-1/2"
            src="https://img.freepik.com/free-vector/hand-holding-phone-with-credit-card-screen-man-making-purchase-shopping-paying-online-using-banking-app-flat-vector-illustration-transaction-e-commerce-concept_74855-26014.jpg?w=1060&t=st=1686718947~exp=1686719547~hmac=be0a8d698ed7418b22ffb5b929ce2306ca67637f8721590762ab5e2e0aab6c2b"
          />
        </figure>
        <div className="card-body ">
          <div>{cardError && <p className="text-red-500">{cardError}</p>}</div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="lg:ms-16 mb-10">
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

        <button
          className="btn btn-outline btn-sm ms-16 mt-5 justify-center inline-flex"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
