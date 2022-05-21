import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import Swal from 'sweetalert2';

const MangeDoctors = () => {
    const { isLoading, error, data: doctors , refetch} = useQuery('services', () =>
        axios.get('http://localhost:5000/doctor', {
            headers: {
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            }
        })
    )

    const handleDeleteDoctor = (email, name) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/doctor/${email}`)
                    .then(data => {
                       console.log(data);
                       if (data.data.deletedCount > 0) {
                           toast.success(`Dr. ${name} Successfully deleted`)
                           refetch()
                       }

                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })


    }
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='sm:px-10 px-2 pb-5'>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-2  sm:py-3">

                            </th>
                            <th scope="col" class="py-2 sm:py-3">
                                Doctor Name
                            </th>
                            <th scope="col" class="py-2 sm:py-3">
                                Spaciality
                            </th>
                            <th scope="col" class="py-2 sm:py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.data?.map((doctor, i) => {


                                return (
                                    <tr key={i} class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" class="px-3 sm:pr-0 sm:pl-8 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]">
                                            {i + 1}
                                        </th>
                                        <td class="py-2 text-[13px] sm:py-4">
                                            {doctor.name}
                                        </td>
                                        <td class="py-2 text-[13px] sm:py-4">
                                            {doctor.spiciality}
                                        </td>
                                        <td class="py-2 text-[13px] sm:py-4 text-center"
                                            onClick={()=>handleDeleteDoctor(doctor.email, doctor.name)}>
                                            <button class="h-6 px-3 uppercase bg-red-500 border-none  hover:bg-red-800 rounded-full text-white">Delete Doctor</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MangeDoctors;