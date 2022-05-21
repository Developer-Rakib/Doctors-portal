import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../Shared/Loader';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams()
    const stripePromise = loadStripe('pk_test_51L1nmKGPq7AV2lfodr5gcy3EzSOHKwBEH2emqXejNfRM0LSaua89mPiSH0YGJW9hBL86KKbfRlFQyItk4guugH3t00uj3H1Hs8');
    
    const { isLoading, error, data: booking } = useQuery(['booking', id], () =>
        axios.get(`http://localhost:5000/booking/${id}`, {
            headers: {
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            }
        })
    )

    if (isLoading) {
        return <Loader></Loader>
    }
    const { date, price, slot, treatment, userName } = booking?.data;

    return (
        <div>
            <div class="card w-96 mx-auto mt-10 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h5 className="font-bold text-primary">Hello , {userName}</h5>
                    <h2 class="card-title">Please Pay for {treatment}</h2>
                    <p>Your Appoinment {date} at {slot}</p>
                    <p>Please Pay ${price}</p>

                </div>
            </div>
            <div class="card w-96 mx-auto mt-10 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;