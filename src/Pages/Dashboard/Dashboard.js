import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-[64px]">
            <input id="dashboard-drower" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h3 className="text-4xl text-purple-500">Dashboard</h3>
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-drower" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={"/dashboard"}>My Appoinment</Link></li>
                    <li><Link to={"/dashboard/review"}>Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;