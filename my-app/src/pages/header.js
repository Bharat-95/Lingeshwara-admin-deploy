import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {

    const router = useRouter();

  return (
    <div className='flex justify-between px-16 py-6 bg-blue-500'>
        <div className='text-3xl'> Welcome to Lingeshwara Tiles</div>
       <ul className='flex space-x-4 items-center'> 
        <Link href='/home'><li className='text-lg  border-1 border-solid border rounded-xl p-[7px] hover:bg-blue-300 hover:text-black'>Home</li></Link>
       <Link href='/hall'> <li className='text-lg  border-1 border-solid border rounded-xl p-[7px] hover:bg-blue-300 hover:text-black'>Hall</li></Link>
        <Link href='/bedroom'><li className='text-lg  border-1 border-solid border rounded-xl p-[7px] hover:bg-blue-300 hover:text-black'>Bedroom</li></Link>
        <Link href='/kitchen'><li className='text-lg  border-1 border-solid border rounded-xl p-[7px] hover:bg-blue-300 hover:text-black'>Kitchen</li></Link>
        <Link href='/pooja'><li className='text-lg  border-1 border-solid border rounded-xl p-[7px] hover:bg-blue-300 hover:text-black'>Pooja room</li></Link>
        <Link href='/elevation'><li className='text-lg  border-1 border-solid border rounded-xl p-[7px] hover:bg-blue-300 hover:text-black'>Elevation</li></Link>
        <Link href='/bathroom'><li className='text-lg  border-1 border-solid border rounded-xl p-[7px] hover:bg-blue-300 hover:text-black'>Bathroom</li></Link>
        <Link href='/parking'><li className='text-lg  border-1 border-solid border rounded-xl p-[7px] hover:bg-blue-300 hover:text-black'>Parking</li></Link>
        <li className='cursor-pointer text-lg  border-1 border-solid border rounded-xl p-[7px] hover:bg-blue-300 hover:text-black ' onClick={() => {router.push('/login')}}>Logout</li>
         </ul>
    </div>
  )
}

export default Header;