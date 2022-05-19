import axios from 'axios';
import { useState, useEffect } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (user) {
            // console.log(user);
            // console.log(user.user.email);
            axios.put(`http://localhost:5000/user/${user?.user?.email}`, user?.user?.email)
                .then(data => {
                    // console.log(data?.data)
                    const token = data?.data?.token;
                    localStorage.setItem('accessToken', token)
                    setToken(token)
                })
        }
    }, [user])
    return [token, setToken]
}
export default useToken;