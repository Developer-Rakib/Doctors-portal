import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import CommonBtn from '../Shared/CommonBtn';

const Appoinment = () => {
    return (
        <div class="hero my-40 h-[480px] text-white bg-[url('https://i.ibb.co/kD56v80/appointment.png')]">
            <div class="hero-content flex-col lg:flex-row">
                <img className='h-[600px] mt-[-135px] rounded-lg' src={doctor} alt="treatment"/>
                <div className='w-[500px] ml-5'>
                    <h4 className='text-xl text-secondary font-semibold mb-4'>Appointment</h4>
                    <h1 class="text-4xl ">Make an appointment Today</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <CommonBtn>Get Started</CommonBtn>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;