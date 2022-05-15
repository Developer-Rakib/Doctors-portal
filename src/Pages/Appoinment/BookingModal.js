import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,setTreatment, date }) => {
    const { name, slots } = treatment;


    const handleBook = (e)=>{
        e.preventDefault()
        const slot = e.target.slot.value;
        console.log(slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box h-[500px] sm:h-[460px]">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h5 className="text-lg text-secondary font-bold text-left">Booking for {name}</h5>
                    <form onSubmit={handleBook} className='flex flex-col w-10/12 mx-auto pt-4'>

                        <input name='userName' disabled className='input input-bordered  my-1.5' value={"Tazul islam"} type="text" />

                        <input name='userEmail' disabled className='input input-bordered  my-1.5' value={"tazulislam@gmail.com"} type="email" />

                        <input disabled className='input input-bordered  my-1.5' value={format(date, "PP")} type="text"/>

                        <select name='slot' class="select select-secondary my-1.5">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>

                        <input name='userNumber' className='input input-bordered  my-1.5' placeholder='Phone' type="number" />

                        <input type="Submit" value={"Book"} className='w-6/12 mx-auto bg-secondary py-2 px-5 text-white rounded-md mt-5' />
                    </form>
                    {/* <h3 class="font-bold text-lg">{treatment.name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="my-modal" class="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;