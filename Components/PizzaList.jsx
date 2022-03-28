import React from 'react'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
      <div className='w-full  bg-white h-full'>
    <div className='flex flex-col text-center  max-w-[1200px] mx-auto bg-white'>
        <h1 className='text-yellow-400'>THE BEST PIZZA IN TOWN</h1>
        <p className='text-[#444]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam ratione, dolorem harum exercitationem repellendus repellat veritatis aut distinctio at, beatae amet consectetur voluptates iste. </p>
    
    <div className='flex flex-row flex-wrap my-10'>
        <div className='flex-col my-3 w-full sm:w-1/2 md:w-1/4 px-4'>
        <PizzaCard />
        </div>
        <div className='flex-col my-3 w-full sm:w-1/2 md:w-1/4 px-4'>
        <PizzaCard />
        </div>
        <div className='flex-col my-3 w-full sm:w-1/2 md:w-1/4 px-4'>
        <PizzaCard />
        </div>
        <div className='flex-col my-3 w-full sm:w-1/2 md:w-1/4 px-4'>
        <PizzaCard />
        </div>
        <div className='flex-col my-3 w-full sm:w-1/2 md:w-1/4 px-4 '>
        <PizzaCard />
        </div>
        <div className='flex-col my-3 w-full sm:w-1/2 md:w-1/4 px-4'>
        <PizzaCard />
        </div>
        <div className='flex-col my-3 w-full sm:w-1/2 md:w-1/4 px-4'>
        <PizzaCard />
        </div>
        <div className='flex-col my-3 w-full sm:w-1/2 md:w-1/4 px-4'>
        <PizzaCard />
        </div>
        
       
       
        </div>
    </div>

    </div>
  )
}

export default PizzaList