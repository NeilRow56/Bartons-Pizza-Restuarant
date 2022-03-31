import React from 'react'
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
  return (
      <div className='w-full  bg-white h-full'>
    <div className ='flex flex-col   text-center  max-w-[1200px] mx-auto bg-white'>
        <h1 className='text-yellow-400 py-5'>THE BEST PIZZA IN TOWN</h1>
        <p className='text-[#444]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam ratione, dolorem harum exercitationem repellendus repellat veritatis aut distinctio at, beatae amet consectetur voluptates iste. </p>
        
    <div className='grid grid-cols-1 p-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
        </div>
        </div>
        
        
        
       
       
        </div>
    

    
  )
}

export default PizzaList