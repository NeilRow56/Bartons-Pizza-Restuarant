import React from 'react'
import LeftCard from './LeftCard'
import Slider from './Slider'

function HomeSection() {
  return (
    <div className='max-w-[1440px] mx-auto px-4 py-24 text-center text-white h-full  bg-red-700 '>
        <h1>All You Can Eat Buffet</h1>
        <p>Mondays and Thursdays</p>
        <div className='grid grid-rows-1 grid-cols-1 md:grid-cols-3 py-4 gap-2 md:gap-4'>
        <div className='w-full  col-span-1  mx-auto' >
            <LeftCard />
            
         </div>
         <div className='w-full  col-span-2  mx-auto' >

             <Slider className='' />
         </div>


        </div>
        
    </div>
  )
}

export default HomeSection