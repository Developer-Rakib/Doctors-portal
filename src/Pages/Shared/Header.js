import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/login')
                toast.success('Logout Succes!')
            })

    }
    const manu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appoinment'>Appoinment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        {
            user ? <button onClick={handleLogout} className='btn btn-ghost text-accent w-[88px] '>Logout</button>
                :
                <li><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className='bg-white fixed top-0 right-0 left-0 z-10'>
            <div class="navbar sm:flex sm:justify-between w-full sm:w-10/12 sm:mx-auto">
                <div class="navbar-start w-11/12 sm:w-auto flex justify-between">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {manu}
                        </ul>
                    </div>
                    <h2 className="btn btn-ghost normal-case text-2xl">Doctors Portal</h2>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {manu}
                    </ul>
                </div>
                {
                    user &&
                    // <label for="dashboard-drower" class="btn btn-primary drawer-button lg:hidden"></label>
                    <label for="dashboard-drower" tabindex="1" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                }
            </div>
        </div>
    );
};

export default Header;