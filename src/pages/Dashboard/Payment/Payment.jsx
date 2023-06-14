import React from 'react';
import PageCover from '../../../shared/PageCovers/PageCovers';
import { img } from '../AddCourse/AddCourse';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stipePromise =loadStripe(import.meta.env.VITE_Payment_Gateway_Key)

const Payment = () => {
    
    return (
        <div>
            <PageCover img={img} title={'Make Payment'}></PageCover>
            <div className='my-10'></div>
            <Elements stripe={stipePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>

            
        </div>
    );
};

export default Payment;