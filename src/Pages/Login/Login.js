import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className='mt-[64px] py-16  '>
            <div style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }} className='rounded-md w-4/12 mx-auto py-14'>
                <h3 className="text-4xl font-bold pb-5 text-center">Login</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-9/12 mx-auto">


                <input className='input input-bordered input-md my-0.5' placeholder='Email'{...register("email", {
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

                    <input className='input input-bordered input-md my-0.5' placeholder='Password' type="password" {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer'
                        }
                    })} />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>

                    <input className='bg-accent border border-accent hover:bg-white hover:text-gray-700 transition-all cursor-pointer rounded-md py-3 text-gray-300' value={"SIGN UP"} type="submit" />
                </form>
                <div className='w-9/12 mx-auto'>
                    <small className='mt-4 mx-2 inline-block'>New to Doctors Portal ? <Link className='text-secondary font-semibold' to={"/signUp"}>Create new Account</Link></small>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline btn-accent w-full">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;