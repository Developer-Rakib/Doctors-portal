import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AvailableAppoinment from './AvailableAppoinment';
import BookingModal from './BookingModal';

const Appoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    // console.log(treatment);

    useEffect(() => {
        axios.get(`http://localhost:5000/available?date=${format(date, ("PP"))}`)
            .then(data => setServices(data.data))
    }, [])
    console.log(services);
    return (
        <div className='text-center myContainer py-10'>
            <h4 className='text-2xl font-semibold text-secondary mb-4'>Available Appoinment on {format(date, 'PP')}</h4>

            <div className='flex flex-wrap justify-evenly my-5'>
                {
                    services.map(service => <AvailableAppoinment
                        key={service._id}
                        date={date}
                        service={service}
                        setTreatment={setTreatment}
                    ></AvailableAppoinment>)
                }
            </div>
           
            {
                treatment && <BookingModal 
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}
                ></BookingModal>
            }

        </div>
    );
};

export default Appoinment;