import React from 'react'
import Image from 'next/image'

const Cart = () => {
  return (
    <div className=' flex max-w-[1440px] mx-auto h w-full   flex-col lg:flex-row'>
        <div className=' pt-36 sm:ml-5 w-full md:flex md:flex-col hidden md: max-w-[800px]'>
         <table className='w-full mb-3 '>
           <thead className='text-left  '>
             <tr>
             <th className=''>Product</th>
             <th>Name</th>
             <th>Extras</th>
             <th>Price $</th>
             <th>Quantity</th>
             <th>Total</th>
             </tr>
           </thead>
           <tbody className=''>
           <tr className=''>
             <td>
               <div className='relative  w-[100px] h-[100px] mt-5' >
               
                 <Image alt="Product" src="/img/pizza.png" layout="fill" objectFit="cover" />
               </div>
             </td>
             <td >
               <span className='text-[#d1411e] font-semibold'>CORALZO</span>
             </td>
             <td>
               <span className=''>Double ingredients, Spicy sauce</span>
             </td>
             <td>
               <span className=''>19.90</span>
             </td>
             <td className='text-center'>
               <span className=''>2</span>
             </td>
             <td>
               <span className='font-semibold'>$39.80</span>
             </td>
           </tr>
           <tr className=''>
             <td>
               <div className='relative  w-[100px] h-[100px] mt-5' >
               
                 <Image alt="Product" src="/img/pizza.png" layout="fill" objectFit="cover" />
               </div>
             </td>
             <td >
               <span className='text-[#d1411e] font-semibold'>CORALZO</span>
             </td>
             <td>
               <span className=''>Double ingredients, Spicy sauce</span>
             </td>
             <td>
               <span className=''>19.90</span>
             </td>
             <td className='text-center'>
               <span className=''>2</span>
             </td>
             <td>
               <span className='font-semibold'>$39.80</span>
             </td>
           </tr>
           <tr className=''>
             <td>
               <div className='relative  w-[100px] h-[100px] mt-5' >
               
                 <Image alt="Product" src="/img/pizza.png" layout="fill" objectFit="cover" />
               </div>
             </td>
             <td >
               <span className='text-[#d1411e] font-semibold'>CORALZO</span>
             </td>
             <td>
               <span className=''>Double ingredients, Spicy sauce</span>
             </td>
             <td>
               <span className=''>19.90</span>
             </td>
             <td className='text-center'>
               <span className=''>2</span>
             </td>
             <td>
               <span className='font-semibold'>$39.80</span>
             </td>
           </tr>
           <tr className=''>
             <td>
               <div className='relative  w-[100px] h-[100px] mt-5' >
               
                 <Image alt="Product" src="/img/pizza.png" layout="fill" objectFit="cover" />
               </div>
             </td>
             <td >
               <span className='text-[#d1411e] font-semibold'>CORALZO</span>
             </td>
             <td>
               <span className=''>Double ingredients, Spicy sauce</span>
             </td>
             <td>
               <span className=''>19.90</span>
             </td>
             <td className='text-center'>
               <span className=''>2</span>
             </td>
             <td>
               <span className='font-semibold'>$39.80</span>
             </td>
           </tr>
           </tbody>
          </table>   

        </div>
        <div className='max-w-[440px] mt-24 mb-5  flex-col bg-gray-700 text-white h-[350px] w-full mx-auto text-center'>
          
          <h2 className='py-10'>CART TOTAL</h2>
           <div className='flex flex-col'>
        <div className='flex w-full text-left py-5'>
        <span className='font-bold ml-36 '>Subtotal</span><h4 className='ml-2'>$79.60</h4>
        </div>
        <div className='flex w-full text-left pb-5'>
        <span className='font-bold ml-36'>Discount</span><h4 className='ml-2'>$0.00</h4>
        </div>
        <div className='flex w-full text-left'>
        <span className='font-bold ml-36'>Subtotal</span><h4 className='ml-2 font-semibold'>$79.60</h4>
        </div>
        <div className='items-center'>
        <button className='my-5 w-[150px] '>CHECKOUT</button>
        </div>
        </div>
        </div>
       
        
    </div>
  )
}

export default Cart