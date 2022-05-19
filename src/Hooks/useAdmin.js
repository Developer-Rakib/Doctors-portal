import {useState, useEffect} from 'react';
import axios from 'axios';
// import auth from '../firebase.init';
// import { useAuthState } from 'react-firebase-hooks/auth';
const useAdmin = (user)=>{
    const [admin, setAdmin]= useState()
    const [adminLoading, setAdminLoading]= useState(true)
    useEffect(()=>{
        if (user) {
            // console.log(user);
            // console.log(user?.email);
            axios.get(`http://localhost:5000/admin/${user?.email}`, {
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(data => {
                    // console.log(data?.data)
                    setAdmin(data.data.admin)
                    setAdminLoading(false)
                })
        }
    }, [user])
    return [admin, adminLoading];
}
export default useAdmin;