import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} className='w-80 rounded-lg my-24 px-8 pt-7 pb-5'>
            <p>{testimonial.description}</p>
            <div className="flex items-center mt-4">
                <div class="avatar h-[70px] w-ful">
                    <div class="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img  src={testimonial.userImg} alt='' />
                    </div>
                </div>
                <div className='ml-3'>
                        <h5 className="font-semiBold">{testimonial.userName}</h5>
                        <p>{testimonial.userLocation}</p>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;