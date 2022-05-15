import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='mt-[64px] py-16  '>
            <div style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }} className='rounded-md w-4/12 mx-auto py-14'>
                <h3 className="text-4xl font-bold pb-5 text-center">Sign Up</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-9/12 mx-auto">

                    <input className='input input-bordered input-md my-0.5' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <label class="label">
                        <span class="label-text-alt text-red-500"></span>
                    </label>

                    <input className='input input-bordered input-md my-0.5' placeholder='Email' {...register("email", { pattern: /^[A-Za-z]+$/i })} />
                    <label class="label">
                        <span class="label-text-alt text-red-500"></span>
                    </label>

                    <input className='input input-bordered input-md my-0.5' placeholder='Password' type="password" {...register("password", { min: 6, max: 12 })} />
                    <label class="label">
                        <span class="label-text-alt text-red-500"></span>
                    </label>

                    <input className='input input-bordered input-md my-0.5' placeholder='Confirm Password' type="password" {...register("confPassword", { min: 6, max: 12 })} />
                    <label class="label">
                        <span class="label-text-alt text-red-500"></span>
                    </label>
                    <input className='bg-accent rounded-md py-3 text-gray-300' value={"SIGN UP"} type="submit" />
                </form>
                <div className='w-9/12 mx-auto'>
                    <small className='mt-4 mx-2 inline-block'>Aleady Have Account ? <Link className='text-secondary font-semibold' to={"/login"}>Log in</Link></small>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline btn-accent w-full">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;