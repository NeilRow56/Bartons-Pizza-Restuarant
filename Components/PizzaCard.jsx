import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function PizzaCard({ pizza }) {
  return (
    <div className='text-[#444] mx-auto flex flex-col '>
      <div className='w-[250px] h-[250px] relative'>
        <Link href ={`/products/${pizza._id}`} passHref >
        <Image alt="Pizza" src={pizza.img} layout="fill" objectFit="cover"className="cursor-pointer"  />
        </Link>
        </div>
        
        <h2 className='text-red-700 py-2'>{pizza.title}</h2>
      <span className='font-bold pt-2 pb-4 text-[#666]'>From: ${pizza.prices[0]}</span>
      <p className='w-full  text-[#777]'>
        {pizza.desc}
      </p>
    </div>
  )
}

export default PizzaCard