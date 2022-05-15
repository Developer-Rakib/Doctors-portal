import React from 'react';
import Banner from './Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';
import Services from './Services';
import DentalCare from './DentalCare';
import Appoinment from './Appoinment';
import Testimonials from './Testimonials';


const Home = () => {

    return (
        <div className='mt-[64px] '>
            <Banner></Banner>
            <div className='flex justify-evenly flex-wrap my-10 myContainer'>
                <Info
                    img={clock}
                    title={"Opening Hours"}
                    description={"Lorem Ipsum is simply dummy text of the pri"}
                    bg={"bg-gradient-to-r from-secondary to-primary"}
                ></Info>
                <Info
                    img={marker}
                    title={"Visit our location"}
                    description={"Brooklyn, NY 10036, United States"}
                    bg={"bg-gray-700"}
                ></Info>
                <Info
                    img={phone}
                    title={"Contact us now"}
                    description={"+000 123 456789"}
                    bg={"bg-gradient-to-r from-secondary to-primary"}
                ></Info>
            </div>
            <Services></Services>
            <DentalCare></DentalCare>
            <Appoinment className='w-full'></Appoinment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;