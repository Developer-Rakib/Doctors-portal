import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AvailableAppoinment from './AvailableAppoinment';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const Appoinment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    // console.log(treatment);
    const { isLoading, error, data : services , refetch} = useQuery(['available', format(date, ("PP"))], () =>  
        axios.get(`http://localhost:5000/available?date=${format(date, ("PP"))}`)
    )


    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='text-center myContainer py-10'>
            <h4 className='text-2xl font-semibold text-secondary mb-4'>Available Appoinment on {format(date, 'PP')}</h4>

            <div className='flex flex-wrap justify-evenly my-5'>
                {
                    services?.data?.map(service => <AvailableAppoinment
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
                    refetch={refetch}
                ></BookingModal>
            }

        </div>
    );
};

export default Appoinment;