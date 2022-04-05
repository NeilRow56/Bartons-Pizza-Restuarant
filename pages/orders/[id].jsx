import React from 'react'
import Image from 'next/image'
import axios from "axios";


const OrderPage = ({ order }) => {

  const status = order.status;

    const statusClass= (index) => {
        if(index-status < 1) return "done"
        if(index-status === 1) return "inProgress"
        if(index-status > 1) return "undone"
    }
        
    
   
  return (
    <div className=' flex max-w-[1440px] mx-auto h w-full h-screen  flex-col lg:flex-row'>
    <div className=' pt-36 sm:ml-5 w-full md:flex md:flex-col  md: max-w-[800px]'>
    
    
         <table className='w-full mb-3 '>
           <thead className='text-left  '>
             <tr>
             <th className=''>Order ID</th>
             
             <th>Customer</th>
             <th>Address </th>
             
             <th>Total</th>
             </tr>
           </thead>
           <tbody className=''>
           <tr className=''>
             <td  >
                 <div className='mt-2'>
                 <span className=''>{order._id}</span>
                 </div>
                 <div className={statusClass(0) }>
               <div className='relative flex flex-col w-[30px] h-[30px] mt-6 mb-2' >
               
                 <Image alt="Checked" src="/img/paid.png" layout="fill" objectFit="cover" />
               </div>
               
                <span >Payment</span>
                <div className= 'relative flex flex-col w-[30px] h-[30px] mt-5' >
                 <Image alt="Checked" src="/img/checked.png" layout="fill" objectFit="cover" />
               </div>
               </div>
             </td>
             
             <td className=''>
             <div className='mt-2'>
                 <span className=''>{order.customer}</span>
                 </div>
               <div className={statusClass(1) }> 
               <div className='relative flex flex-col w-[30px] h-[30px] mt-6 mb-2'  >
               
                 <Image alt="Preparing" src="/img/bake.png" layout="fill" objectFit="cover" />
               </div>
               <span 
               >Preparing</span>
               <div className='relative flex flex-col w-[30px] h-[30px] mt-5' >
               
                 <Image alt="Checked" src="/img/checked.png" layout="fill" objectFit="cover" />
               </div>
               </div> 
             </td>
             <td >
             <div className='w-[210px] '>
             <div className='mt-2'>
                 <span className=''>{order.address}</span>
                 </div>
                <div className={statusClass(2)} >
               <div className='relative flex flex-col w-[30px] h-[30px] mt-6 mb-2' >
               
                 <Image alt="Bike" src="/img/bike.png" layout="fill" objectFit="cover" />
               </div>
               <span >Delivering</span>
               <div className='relative flex flex-col w-[30px] h-[30px] mt-5' >
               
                 <Image alt="Checked" src="/img/checked.png" layout="fill" objectFit="cover" />
               </div>
               </div>
             </div>
             </td>
             <td  >
             <div className='w-[100px]'>
             <div className='mt-2'>
                 <span > ${order.total}</span>
                 </div>
            <div className={statusClass(2) }>
               <div className='relative flex flex-col w-[30px] h-[30px] mt-6 mb-2' >
               
                 <Image alt="Checked" src="/img/delivered.png" layout="fill" objectFit="cover" />
               </div>
               <span className='' >Complete</span>
               <div className='relative flex flex-col w-[30px] h-[30px] mt-5 ' >
               
                 <Image alt="Checked" src="/img/checked.png" layout="fill" objectFit="cover" />
               </div>
               </div>
               </div>
             </td>
           </tr>
           
           </tbody>
          </table>   
          </div>
    
        
    <div className='max-w-[440px] mt-24 mb-5  flex-col bg-gray-700 text-white h-[350px] w-full mx-auto text-center'>
          
          <h2 className='py-10'>CART TOTAL</h2>
           <div className='flex flex-col'>
        <div className='flex w-full text-left py-5'>
        <span className='font-bold ml-36 '>Subtotal</span><h4 className='ml-2'>${order.total}</h4>
        </div>
        <div className='flex w-full text-left pb-5'>
        <span className='font-bold ml-36'>Discount</span><h4 className='ml-2'>$0.00</h4>
        </div>
        <div className='flex w-full text-left'>
        <span className='font-bold ml-36'>Subtotal</span><h4 className='ml-2 font-semibold'>${order.total}</h4>
        </div>
        <div className='items-center'>
        <button  className='bg-gradient-to-r from-teal-700 to-teal-400 my-5 w-[150px] cursor-not-allowed disabled:opacity-50 '>PAID</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};


export default OrderPage