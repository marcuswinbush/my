
'use client';

import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Implement your authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center
    '>
        <div className='bg-red-100 flex rounded-2xl shadow-lg max-w-3xl p-3'>
            
            
            <div className='sm:w-1/2 px-16'>
            <h2 className='font-bold text-2xl text-[#501616]'>Login</h2>
            <p className='text-sm mt-4 text-[#501616]'>If you already a member, please log in.</p>
            
            <form action="" className='flex flex-col gap-4'>
                <input className='p-2 mt-8 rounded-xl border' type='text' name="email" placeholder='Email'/>
                <div className='relative'>
                <input className='p-2 rounded-xl border w-full' type='password' name='password' placeholder='Password'/>
                <FaEye className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-400'/>
                </div>
                <button className='bg-[#501616] rounded-xl text-white py-2 hover:scale-105 duration-300'>Log In</button>
            </form>
            
            <div className='mt-10 grid grid-cols-3 
            items-center text-gray-500'>
              <hr className='border-gray-500'/>
              <p className='text-center text-sm'>OR</p>
              <hr className='border-gray-500'/>
            </div>

          <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm  hover:scale-105 duration-300'>
          <FcGoogle className='h-25px w-25px mr-3'/> Login with Google</button>


          <p className='mt-10 text-xs border-b border-gray-400 py-4'>Forgot your password?</p>


          <div className='mt-3 text-xs flex justify-between items-center'>
            <p>Do not have an account? </p>
              <button className='py-2 px-5 bg-white border rounded-xl hover:scale-105 duration-300'>Register</button>
            
          </div>
            </div>

            <div className='sm:block hidden w-1/2'>
                <img className="rounded-2xl" src='/Images/login.png'></img>
            </div>

           
        
     
        </div>
      
    </div>
  );
};

export default Login;