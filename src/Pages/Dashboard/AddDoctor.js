import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import toast from 'react-hot-toast';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { isLoading, error, data: services } = useQuery('services', () =>
        axios.get('http://localhost:5000/services')
    )

    const imgStorage_key = `337d76e7a5799a6aeebe82688b06e092`

    if (isLoading) return <Loader></Loader>

    const onSubmit = async data => {
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    // console.log(result);
                    const imgUrl = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        spiciality: data.spiciality,
                        img: imgUrl
                    }
                    console.log(doctor);
                    axios.post(`http://localhost:5000/doctor`, doctor, {
                        headers: {
                            'authorization': `bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(data => {
                            // console.log(data.data.success);
                            console.log(data);
                            if (data.data.success) {
                                toast.success(`${data.data.message}`)
                            }
                            else {
                                toast.success(`${data.data.message}`)

                            }

                        })

                }
            })



        // console.log("form data", data);

        // console.log(doctor);

    }
    return (
        <div className=' mt-5'>
            <h2 className="text-3xl font-bold mb-3 text-center">Add A Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-7/12 mx-auto">

                <input className='input input-bordered input-md' placeholder='Name' {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is Required'
                    }
                })} />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>

                <input className='input input-bordered input-md' placeholder='Email'{...register("email", {
                    required: {
                        value: true,
                        message: 'Email is Required'
                    },
                    pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid Email'
                    }
                })} />
                <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>




                <select {...register('spiciality')} class="select select-accent my-1.5">
                    {
                        services.data.map(spaciality => <option key={spaciality._id}>{spaciality.name}</option>)
                    }
                </select>

                <input type={'file'} className='mt-4 ' {...register("img", {
                    required: {
                        value: true,
                        message: 'img is Required'
                    }
                })} />
                <label className="label">
                    {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                </label>


                <input className='font-semibold bg-accent border border-accent hover:bg-white hover:text-gray-700 transition-all cursor-pointer rounded-md mt-3 py-2.5 text-gray-200' value={"Add Doctor"} type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;