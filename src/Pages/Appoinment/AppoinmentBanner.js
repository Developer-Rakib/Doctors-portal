import React, { useState } from 'react';
import chier  from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = ({date, setDate}) => {
    return (
        <div class='hero min-h-[70vh] bg-[url("https://i.ibb.co/GxSh87H/bg.png")]'>
            <div class="flex justify-evenly flex-col-reverse sm:flex-row">
                <div className=''>
                    <div className='w-full'>
                        <DayPicker
                        style={{background:"white", padding:"15px 15px", borderRadius:"10px"}}
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        ></DayPicker>
                    </div>
                </div>
                <img src={chier} class='w-11/12 mx-auto sm:w-5/12' alt='' />
            </div>
        </div>
    );
};

export default AppoinmentBanner;