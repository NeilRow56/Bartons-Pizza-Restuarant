import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart )

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
           {cart.products.map((product) => (
           <tr className='' key = {product._id}>
             <td>
               <div className='relative  w-[100px] h-[100px] mt-5' >
               
                 <Image alt="Product" src={product.img} layout="fill" objectFit="cover" />
               </div>
             </td>
             <td >
               <span className='text-[#d1411e] font-semibold'>{product.title}</span>
             </td>
             <td>

               <span className=''>
                 {product.extras.map((extra) => (
                   <span key={extra._id}>{extra.text}, </span>
                 ))}
                 </span>
             </td>
             <td>
               <span className=''>{product.price}</span>
             </td>
             <td className='text-center'>
               <span className=''>{product.quantity}</span>
             </td>
             <td>
               <span className='font-semibold'>${product.price * product.quantity}</span>
             </td>
           </tr>
           ))}
           </tbody>
          </table>   

        </div>
        <div className='max-w-[440px] mt-24 mb-5  flex-col bg-gray-700 text-white h-[350px] w-full mx-auto text-center'>
          
          <h2 className='py-10'>CART TOTAL</h2>
           <div className='flex flex-col'>
        <div className='flex w-full text-left py-5'>
        <span className='font-bold ml-36 '>Subtotal</span><h4 className='ml-2'>${cart.total}</h4>
        </div>
        <div className='flex w-full text-left pb-5'>
        <span className='font-bold ml-36'>Discount</span><h4 className='ml-2'>$0.00</h4>
        </div>
        <div className='flex w-full text-left'>
        <span className='font-bold ml-36'>Total</span><h4 className='ml-2 font-semibold'>${cart.total}</h4>
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