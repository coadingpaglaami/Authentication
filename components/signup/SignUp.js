'use client';
import Link from 'next/link';
import React, { useState } from 'react'

export const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: 'Jerry Helfer',
        email: 'jerry73@a01.com',
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
            <h4 className='text-2xl font-semibold text-white text-center'>Create Your Account</h4>
            <form onSubmit={handleSubmit} className="grid gap-2 ">
                <div >
                    <label htmlFor="fullName" className=" text-sm font-medium text-white">Full name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder='Enter Your Name....'
                        onChange={handleChange}
                        className="flex-1 w-full rounded-md p-2 bg-white text-black focus:outline-none focus:border-none"
                    />
                </div>
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
                <div>
                    <label className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <span className="ml-2 text-sm text-white">I agree to the terms and conditions</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className=" mt-5 w-full  text-white defaultbutton rounded-md hover:bg-indigo-700"
                >
                    Sign up
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
                <p className="text-center text-sm text-white ">Already Have an account? <Link href='/login' className='text-[#4ADE80]'>Sign in</Link></p>
            </form>
        </div>
    )
}


