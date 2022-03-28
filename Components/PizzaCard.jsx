import Image from 'next/image'
import React from 'react'

function PizzaCard() {
  return (
    <div className='text-[#444]  flex flex-col'>
        <Image alt="Pizza" src="/img/pizza.png " width={500} height={500}/>
        <h2 className='text-red-700 py-2'>FIORI DI ZUCCA</h2>
      <span className='font-bold pt-2 pb-4 text-[#666]'>$19.90</span>
      <p className='w-3/4 ml-10 text-[#777]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default PizzaCard