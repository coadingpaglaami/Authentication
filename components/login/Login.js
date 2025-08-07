'use client';
import Link from 'next/link';
import React, { useState } from 'react'

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };


    return (
        <div >
            <h4 className='text-2xl font-semibold text-white text-center'>Welcome Back!</h4>
            <form onSubmit={handleSubmit} className="grid gap-2 ">
                <div>
                    <label htmlFor="email" className=" text-sm font-medium text-white ">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        onChange={handleChange}
                        className="mt-1 block w-full p-2  rounded-md bg-white text-black focus:outline-none focus:border-none"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white ">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='*******'
                        className="mt-1 block w-full p-2 rounded-md bg-white text-black focus:outline-none focus:border-none"
                    />
                </div>
                <Link href='/forget-password' className='w-full text-end'>Forget Password?</Link>
              
                <button
                    type="submit"
                    className=" w-full p-2 text-white defaultbutton  rounded-md hover:bg-indigo-700"
                >
                   Log In
                </button>
                <div className="flex flex-row items-center gap-2">
                    <hr className='flex flex-grow border-white/30 ' />
                    <span className='text-sm text-white/30 '>OR</span>
                    <hr className='flex flex-grow border-white/30 ' />
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="bg-white h-12 w-12 p-2 rounded-md border border-gray-300">
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="h-6 w-6" />
                    </button>
                    <button className="bg-white w-12 h-12 p-2 rounded-md border border-gray-300">
                        <img src="https://www.apple.com/favicon.ico" alt="Apple" className="h-6 w-6" />
                    </button>
                </div>
                <p className="text-center text-sm text-white ">Don't Have an Account <Link href='/signup' className='text-[#4ADE80]'>Sign Up</Link></p>
            </form>
        </div>
    )
}


