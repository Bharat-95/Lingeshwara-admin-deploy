import React from 'react'
import Header from './header'
import '../app/globals.css'

const home = () => {
  return (
    <div className='w-[1000px] lg:w-[100%]'>
        <Header/>
       <div className='text-center mt-10 text-4xl'> Welcome to Lingeshwara Tiles</div>
        </div>
  )
}

export default home