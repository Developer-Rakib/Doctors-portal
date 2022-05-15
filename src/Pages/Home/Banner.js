import React from 'react';
import cheir from '../../assets/images/chair.png'
import CommonBtn from '../Shared/CommonBtn';

const Banner = () => {
    return (
        <div class='hero myContainer min-h-[90vh] bg-[url("https://i.ibb.co/GxSh87H/bg.png")]'>
            <div class="hero-content flex-col  lg:flex-row-reverse">
                <img src={cheir} class='w-6/12' alt='' />
                <div >
                    <div className='w-full'>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <CommonBtn>Get Started</CommonBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;