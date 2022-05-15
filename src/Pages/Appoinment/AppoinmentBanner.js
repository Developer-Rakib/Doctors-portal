import React from 'react';
import chier  from '../../assets/images/chair.png';

const AppoinmentBanner = () => {
    return (
        <div class='hero myContainer min-h-[90vh] bg-[url("https://i.ibb.co/GxSh87H/bg.png")]'>
            <div class="hero-content flex-col  lg:flex-row-reverse">
                <img src={chier} class='w-full sm:w-6/12' alt='' />
                <div >
                    <div className='w-full'>
                        <h1 class="text-4xl sm:text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-4 sm:py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;