import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const MangeDoctors = () => {
    const { isLoading, error, data: doctors } = useQuery('services', () =>
    axios.get('http://localhost:5000/doctor',{
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }
    })
)
    console.log(doctors.data);
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors</h2>
        </div>
    );
};

export default MangeDoctors;