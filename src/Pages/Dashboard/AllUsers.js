import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';

const AllUsers = () => {
    const { isLoading, error, data : users} = useQuery('user', () =>
        axios.get('http://localhost:5000/user')
    )
    console.log(users?.data);
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
                                user
                            </th>
                            <th scope="col" class="py-2 sm:py-3 text-center">
                                Autorize
                            </th>
                            <th scope="col" class="py-2 sm:py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.data?.map((user, i) => {
                                return (
                                    <tr key={i} class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" class="px-3 sm:pr-0 sm:pl-8 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]">
                                            {i + 1}
                                        </th>
                                        <td class="py-2 text-[13px] sm:py-4">
                                            {user.email}
                                        </td>
                                        <td class="py-2 text-[13px] sm:py-4 text-center">
                                        <button class="h-6 px-3 uppercase bg-green-400 border-none hover:bg-green-600 rounded-full text-white">Make Admin</button>
                                        </td>
                                        <td class="py-2 text-[13px] sm:py-4 text-center">
                                        <button class="h-6 px-3 uppercase bg-red-500 border-none  hover:bg-red-800 rounded-full text-white">Delete User</button>
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

export default AllUsers;