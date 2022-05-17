import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const AppoinmentList = () => {
    const { isLoading, error, data: appoinments, refetch } = useQuery("booking", () =>
        axios.get(`http://localhost:5000/booking`)
    )

    console.log(appoinments?.data);
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
                                Name
                            </th>
                            <th scope="col" class="py-2  sm:py-3">
                                Service
                            </th>
                            <th scope="col" class="py-2  sm:py-3">
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinments?.data?.map((appoinment, i) => {
                                return (
                                    <tr key={i} class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" class="pl-3 pr-3 sm:pr-0 sm:pl-5py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            {i+1}
                                        </th>
                                        <td class="py-2  sm:py-4">
                                            {appoinment.userName}
                                        </td>
                                        <td class="py-2  sm:py-4">
                                            {appoinment.treatment}
                                        </td>
                                        <td class="py-2  sm:py-4">
                                            {appoinment.date}
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

export default AppoinmentList;