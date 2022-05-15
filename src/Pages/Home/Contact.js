import React from 'react';

const Contact = () => {
    return (
        <div className="text-white py-10 my-16 sm:py-16 text-center bg-[url('https://i.ibb.co/kD56v80/appointment.png')]">
            <h5 className="font-bold text-base sm:text-lg text-secondary">Contact Us</h5>
            <h3 className="text-3xl sm:text-4xl">Stay connected with us</h3>
            <form className='flex flex-col w-11/12 sm:w-4/12 mt-5 sm:mt-8 mx-auto text-black'>
                <input className='my-2 px-3 py-2 sm:py-3 rounded-md' type="email" placeholder='Email Address'/>
                <input className='my-2 px-3 py-2 sm:py-3 rounded-md' type="text" placeholder='Subject'/>
                <textarea className='my-2 py-2 px-3  rounded-md' placeholder='Message' name="" id="" cols="30" rows="7"></textarea>
                <input className='rounded-md text-white cursor-pointer border-none bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary w-28 py-2 mx-auto mt-5' type="submit" />
            </form>
        </div>
    );
};

export default Contact;