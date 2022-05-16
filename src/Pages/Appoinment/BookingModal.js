import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    // console.log(user.displayName);



    const handleBook = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const treatment = {
            slot,
            treatment: name,
            trearmentId: _id,
            date: format(date, "PP"),
            userEmail: e.target.userEmail.value,
            userName: e.target.userName.value,
            phone: e.target.userNumber.value,
        }
        // console.log(treatment);
        axios.post("http://localhost:5000/booking", treatment)
            .then(data => {
                if (!data.data.success) {
                    // console.log(data.data.message)
                    toast.error(`Already have and Appoinment on  ${data.data.message.date} at ${data.data.message.slot}`)
                }
                else {
                    // console.log(data.data.message)
                    if (data.data.message.insertedId) {
                        toast.success(`Appoinment is set, ${format(date, "PP")} at ${slot}`)
                    }
                    else{
                        toast.error("Somthing is Wrong")
                    }
                }

            })

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
                        <input name='userName' disabled className='input input-bordered  my-1.5' value={user?.displayName || ""} type="text" />

                        <input name='userEmail' disabled className='input input-bordered  my-1.5' value={user?.email || ""} type="email" />

                        <input disabled className='input input-bordered  my-1.5' value={format(date, "PP")} type="text" />

                        <select name='slot' class="select select-secondary my-1.5">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>

                        <input name='userNumber' className='input input-bordered  my-1.5' placeholder='Phone' type="number" />

                        <input type="Submit" value={"Book"} className='w-6/12 mx-auto bg-secondary py-2 px-5 text-white rounded-md mt-5' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;