import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loader from '../Shared/Loader';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const AppoinmentList = () => {
    const [user,] = useAuthState(auth);
    const [appoinment, setAppoinment] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:5000/booking?email=${user.email}`, {
            headers: {
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(data => {
                // console.log(data.data);
                setAppoinment(data.data)
            })
            .catch(error => {
                console.log(error.response.status);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth)
                        .then(() => {
                            navigate('/login')
                            if (error.response.status === 403) {
                                toast.error("Alert! Your Login Token is expire, Please login Again!", { id: 'unauthorize' });
                            }
                            else {
                                toast.error("Alert!! unauthorize access, You are Loged Out!", { id: 'unauthorize' });
                            }

                        })
                }

            })
        // } 
        // catch (error) {
        //     console.log(error);
        // if (error.response.status === 403 || error.response.status === 401) {
        //     signOut(auth)
        //         .then(() => {
        //             navigate('/login')
        //             if (error.response.status === 403) {
        //                 toast.error("Alert! Your Login Token is expire, Please login Again!", { id: 'unauthorize' });
        //             }
        //             else {
        //                 toast.error("Alert!! unauthorize access, You are Loged Out!", { id: 'unauthorize' });
        //             }

        //         })
        // }
        // }
    }, [user.email])

    // console.log(appoinments?.data);

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
                                Treatment
                            </th>
                            <th scope="col" class="py-2  sm:py-3">
                                Date
                            </th>
                            <th scope="col" class="py-2  sm:py-3">
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appoinment?.map((appoinment, i) => {
                                return (
                                    <tr key={i} class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                        <th scope="row" class="pl-3 pr-3 sm:pr-0 sm:pl-5 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]">
                                            {i + 1}
                                        </th>
                                        <td class="py-2 text-[13px] sm:py-4">
                                            {appoinment.userName}
                                        </td>
                                        <td class="py-2 text-[13px] sm:py-4">
                                            {appoinment.treatment}
                                        </td>
                                        <td class="py-2 text-[13px] sm:py-4">
                                            {appoinment.date}
                                        </td>
                                        <td class="py-2 text-[13px] sm:py-4">
                                            {appoinment.slot}
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