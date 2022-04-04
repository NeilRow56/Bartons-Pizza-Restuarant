import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from "../../redux/cartSlice";

const ProductPage = ({ pizza }) => {

    const [price, setPrice] = useState(pizza.prices[0]);
    const [size, setSize] = useState(0)
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);

    const dispatch = useDispatch()

    const changePrice = (number) => {
        setPrice(price + number);
      };

    const handleSize = (sizeIndex) => {
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
      };

      const handleClick = () => {
        dispatch(addProduct({...pizza, extras, price, quantity}));
      };
    
    

    const handleChange = (e, extra) => {
        const checked = e.target.checked;
    
        if (checked) {
          changePrice(extra.price);
          setExtras((prev) => [...prev, extra]);
        } else {
          changePrice(-extra.price);
          setExtras(extras.filter((extra) => extra._id !== extra._id));
        }
      };
    
  return (
    <div className='max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row py-24 text-center   h-full'>
        <div className='flex-1 relative mt-2 md:mt-10 lg:mt-20'>
            <Image src={pizza.img} alt={pizza.title} width={400} height={400}layout='responsive' />
        </div>
        <div className='flex-1 mt-4 md:mt-10 lg:mt-20 text-left space-y-5  pl-2 md:pl-20'>
            <h1 className='py-5'>{pizza.title}</h1>
            <span className='pb-5 text-red-700 underline text-[20px]'>${ price }</span>
            <p className='text-sm'>{pizza.desc}</p>
            <h3 className='py-5'>Choose the size</h3>
            <div className='flex flex-row items-center space-x-16 lg:space-x-32'>
            <div className='flex flex-col text-yellow-400 w-[50px] cursor-pointer' onClick={() => handleSize(0)}>
                <Image src="/img/size.png" alt="pizza size" width={40} height={40}  />
                <span className='bg-green-700 rounded-md my-2 w-[80px] text-center'>Small</span>
            </div>
            <div className='flex flex-col text-yellow-400 w-[70px] cursor-pointer' onClick={() => handleSize(1)}>
                <Image src="/img/size.png" alt="pizza size" width={60} height={60}  />
                <span className='bg-green-700 rounded-md my-2 w-[80px] text-center'>Small</span>
            </div>
            <div className='flex flex-col text-yellow-400 w-[90px] cursor-pointer' onClick={() => handleSize(2)}>
                <Image src="/img/size.png" alt="pizza size" width={80} height={80}  />
                <span className='bg-green-700 rounded-md my-2 w-[80px] text-center'>Large</span>
            </div>
           
            </div>

            <h3>Choose additional ingredients </h3>
            <div className=' flex  text-red-700 font-semibold text-[10px] sm:text-[15px]'>
                {pizza.extraOptions.map((extra) => (
                <div className='mr-2' key={extra._id}>
                    <input
                    type="checkbox"
                    id={extra.text}
                    name={extra.text}
                    
                    className='mr-2 w-5 h-5'
                    
                    onChange={(e) => handleChange(e, extra)}
                    
                    />
                    <label htmlFor='double' >{extra.text}</label>
                </div>
                ))}
               
            </div>
            <div className='items-center'>
                <input  onChange={(e) => setQuantity(e.target.value)}
                 type="number" defaultValue={1} className='w-[50px] h-[30px] text-center border-2 border-gray-100' />
                <button
                onClick={handleClick}
                className='ml-2'> Add to Cart</button>
            </div>


        </div>
    </div>
  )
}
export const getServerSideProps = async ({params}) => {
	const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
	return {
		props: {
			pizza: res.data,
		},
	};
};



export default ProductPage