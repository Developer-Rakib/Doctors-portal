import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React,{useState} from 'react';

const CheckoutForm = () => {
    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log( error);
            setError(error.message)
        } else {
            console.log(paymentMethod);
            setError('')
        }

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
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
            <button className='btn btn-xs bg-primary text-white mt-3 border-none' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        {error && <p className='text-red-500'>{error}</p>}
    </>
    );
};

export default CheckoutForm;