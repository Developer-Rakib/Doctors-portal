import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({ service, date, setTreatment }) => {
    const { _id, name, slots } = service;
    return (
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }} className='w-80 py-8 rounded-md my-5 mx-5'>
            <h4 className='text-xl font-semibold text-secondary '>{name}</h4>
            <h5 className=''><strong>{format(date, 'PP')}</strong></h5>
            <h5><strong>{
                slots.length > 0 ? slots[0]
                    : "Try Another Day"
            }</strong></h5>
            <h5 className='mb-3'><strong>{slots.length} {
                slots.length > 0 ? " Spaces" : " Space"
            }Available</strong></h5>

            <label
                onClick={() => setTreatment(service)}
                disabled={slots.length === 0}
                for="my-modal"
                class="px-8 py-2 rounded-md cursor-pointer text-white border-none bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary transition"
            >Book Now</label>


        </div>
    );
};

export default AvailableAppoinment;