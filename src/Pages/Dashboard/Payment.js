import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../Shared/Loader';

const Payment = () => {
    const { id } = useParams()
    // console.log(id);
    const { isLoading, error, data: booking } = useQuery(['booking', id], () =>
        axios.get(`http://localhost:5000/booking/${id}`, {
            headers: {
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            }
        })
    )
    console.log(booking?.data);
    const {date, price,  slot, treatment, userName} = booking?.data;

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div class="card w-96 mx-auto mt-10 bg-base-100 shadow-xl">
            <div class="card-body">
                <h5 className="font-bold text-primary">Hello , {userName}</h5>
                <h2 class="card-title">Please Pay for {treatment}</h2>
                <p>Your Appoinment {date} at {slot}</p>
                <p>Please Pay ${price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Payment;