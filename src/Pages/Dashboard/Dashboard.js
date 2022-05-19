import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    // console.log(admin);
    return (
        <div class="drawer drawer-mobile mt-[64px] myContainer">
            <input id="dashboard-drower" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h3 className="text-2xl text-center sm:text-left sm:px-10 py-5 text-purple-500 font-bold">Dashboard</h3>
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-drower" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className='border my-1' to={"/dashboard"}>My Appoinment</Link></li>
                    <li><Link className='border  my-1' to={"/dashboard/myReview"}>My Reiview</Link></li>
                    <li><Link className='border my-1' to={"/dashboard/myHistory"}>My History</Link></li>
                    {
                        admin && <li><Link className='border my-1' to={"/dashboard/allUsers"}>All Users</Link></li>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;