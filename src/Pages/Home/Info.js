import React from 'react';

const Info = ({img, title, description, bg}) => {
    return (
        <div class={`card card-side  w-96 ${bg} text-white shadow-xl mx-3 px-8 py-7`}>
            <figure><img className='' src={img} alt="Movie" /></figure>
            <div class="flex justify-center flex-col items-center  ml-3">
                <div>
                <h2 class="text-xl font-semibold">{title}</h2>
                <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Info;