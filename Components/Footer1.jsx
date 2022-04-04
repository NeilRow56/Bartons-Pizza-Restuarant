import Image from 'next/image'
import React from 'react'

function Footer1() {
  return (
    <div>
         <div className='grid grid-rows-1 grid-cols-1 md:grid-cols-2  xl:grid-cols-4   bg-[#222]'>
        <div className=' col-span-1  mx-auto relative w-full xl:w-[400px]' >
            
        <Image alt="Pizza" src="/img/bg.png " width={400} height={400} layout="responsive" className=''/>
            
            
            
         </div>
        <div className='w-full text-white bg-  col-span-1 text-center pt-10 mx-auto' >
        <h2 className='mx-5 lg:mx-24 '>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
            
         </div>
        <div className='w-full text-gray-200   col-span-1  mx-auto' >
        <div className=''>
          <h1 className='my-5 md:my-4 mx-20 md:mx-2 text-yellow-400'>FIND OUR RESTAURANTS</h1>
          <p className='py-4  px-20 md:px-2'>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className='px-20 md:px-2'>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className='py-4 px-20 md:px-2'>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className=' px-20 md:px-2'>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
            
         </div>
        <div className='w-full  col-span-1  mx-auto text-white' >
        <div className=''>
          <h1 className=' text-yellow-400 py-4  px-20 md:px-2'>OPENING HOURS</h1>
          <p className='py-4  px-20 md:px-2'>
            MONDAY UNTIL FRIDAY
            <br /> 9.00-22.00
            
          </p>
          <p className='pb-10  px-20 md:px-2'>
            SATURDAY - SUNDAY
            <br /> 12.00-24.00
            
          </p>
          </div>
            
         </div>
         


        </div>
    </div>
  )
}

export default Footer1