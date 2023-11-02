"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../app/globals.css';


const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const handleClick = async () => {
    if (typeof window !== 'undefined') {
      try {
        const response = await fetch('http://20.197.16.153:4000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          router.push('/home');
        } else {
          console.log('Invalid User Id or password');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  };

  return (
    <div className='flex flex-col space-y-10 items-center'>
      <div className='text-center text-4xl py-10'>Lingeshwara Tiles</div>
      <div className='text-center'>
        Name:
        <input
          type='text'
          className='w-96 h-10 ml-8 text-black p-3'
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='text-center'>
        Password:
        <input
          type='password'
          className='w-96 h-10 ml-2 text-black p-3'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='flex justify-center'>
        <button
          className='bg-white text-black items-center w-20 rounded-md'
          type='button'
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
