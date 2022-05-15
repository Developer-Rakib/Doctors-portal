import React, { useState } from 'react';
import Appoinment from './Appoinment';
import AppoinmentBanner from './AppoinmentBanner';

const AppoinmenPage = () => {
    const [date, setDate] = useState(new Date());
    

    return (
        <div className='mt-[64px]'>
            <AppoinmentBanner
            date={date}
            setDate={setDate}
            ></AppoinmentBanner>
            <Appoinment date={date}></Appoinment>
        </div>
    );
};

export default AppoinmenPage;