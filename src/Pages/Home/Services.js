import React from 'react';
import Service from './Service';
import fluride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teat from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {img: fluride, title: "Fluoride Treatment", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"},
        {img: cavity, title: "Cavity Filling", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"},
        {img: teat, title: "Teeth Whitening", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"},
    ]
    return (
        <div className='text-center my-16'>
            <h5 className="font-semibold text-lg text-primary uppercase">Our Services</h5>
            <h3 className="text-3xl">Services We Provide</h3>
            <div className='flex justify-evenly flex-wrap mt-5'>
                {
                    services.map((service, i) => <Service
                     key={i}
                     service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;