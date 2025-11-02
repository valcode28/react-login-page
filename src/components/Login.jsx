import React, { useState } from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaEyeSlash } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import { ImAppleinc } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";



const Login = () => {

  const [showPassword, setShowPassord] = useState(false);
  const togglePasswordVisibility = () =>
    setShowPassord(!showPassword);

  return (
    <div className='w-full h-screen items-center flex justify-center'>
      <div className='w-[90%] max-w-sm md:max-w-md ig:max-w-md p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-x1 shadow-slate-500 shadow-lg'>
        <h1 className='text-1g md:text-xl font-semibold'>Welcome Back</h1>
        <p className='text-xs md:text-sm text-gray-500 text-center'>Don't have an account? <span>Sign up</span></p>


        <div className='w-full flex flex-col gap-3'>
          <div className='w-full items-center bg-gray-800 p-2 rounded-xl gap-2'>
            <MdOutlineAlternateEmail />
            <input type="email" placeholder='Email account' className='bg-transparent border-0 w-full outline-none text-sm md:text-base' />

          </div>
          <div className='w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative'>
            <FaFingerprint />
            <input
              type={showPassword ? "password" : "text"}
              placeholder='Password' className='bg-transparent border-0 w-full outline-none text-sm md:text-base' />
            {showPassword ? (
              <LiaEyeSolid
                className='absolute right-5 cursor-pointer' onClick={togglePasswordVisibility} />) :
              (<FaEyeSlash
                className='absolute right-5 cursor-pointer'
                onClick={togglePasswordVisibility} />)}
          </div>

        </div>
        <button className='w-full p-2 bg-blue-500 rounded-3xl mt-3 hover:text-blue-600 text-sm md:text-base'>
          Login
        </button>
        <div className='relative w-full flex items-center justify-center py-3'>
          <div className='w-2/3 h-0.5 bg-gray-800'></div>
          <h3 className='text-xs md:text-ms px-4 text-gray-500'>Or</h3>
          <div className='w-2/3 h-0.5 bg-gray-800'></div>


        </div>
        <div className='relative w-full flex items-center justify-between py-3'>
          <div className='p-2 md:px-10 bg-slate-700 cursor-pointer rounded-3xl hover:bg-slate-800'>
            <ImAppleinc className='text-1g md:text-3xl' />
          </div>
          <div className='p-1 md:px-6 ig:px-10 bg-slate-100 cursor-pointer rounded-3xl hover:bg-slate-800'>
            <FcGoogle className='text-1g md:text-3xl' />
          </div>
          <div className='p-2 md:px-10 bg-slate-700 cursor-pointer rounded-3xl hover:bg-slate-800'>
            <FaXTwitter className='text-1g md:text-3xl' />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login