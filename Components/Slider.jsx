import React, { useState } from 'react';
import Image from 'next/image'
import { BsArrowLeftSquareFill, 
    BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://media.istockphoto.com/photos/supreme-pizza-slice-lift-picture-id153784617?k=20&m=153784617&s=612x612&w=0&h=muHavOUqyjg8RkaIwbruet5I_IFkYJP6cPBi5M47jvI=',
  },
  {
    url: 'https://media.istockphoto.com/photos/tasty-vegetable-pizza-picture-id1334114165?k=20&m=1334114165&s=612x612&w=0&h=kdmwqIQMqig24GQMEvVGAV1Lor-qAhlERXcmkqyoh0Q=',
  },
  {
    url: 'https://media.istockphoto.com/photos/homemade-spicy-jalapeno-pepperoni-pizza-picture-id1307659068?k=20&m=1307659068&s=612x612&w=0&h=7dS0A6JN6hoTqUgTUIpy9bD-UkHZkltRnbKyHWr8CDs=',
  },
  {
    url: 'https://media.istockphoto.com/photos/neapolitan-pizza-on-black-background-picture-id1295797149?b=1&k=20&m=1295797149&s=170667a&w=0&h=pvcxQRi0VJvzSr6VW6UBH-TfBEamd_fM5dPpYzUGNg4=',
  },
]
function Carousel() {
    const [slide, setSlide ] = useState(0)
    const length = sliderData.length;
    // console.log(length)
  
    const prevSlide = () => {
      setSlide(slide === length - 1 ? 0 : slide + 1);
    };
    const nextSlide = () => {
      setSlide(slide === 0 ? length - 1 : slide - 1);
    };
  return (
    <div className='w-full md:mx-auto px-4 py-4 lg:mr-24  relative   flex justify-center items-center bg-red-700 '>
      <div className='absolute top-[50%] text-3xl text-white cursor-pointer left-6 xl:left-[50px] z-20'>
      <BsArrowLeftSquareFill size={25}  onClick={prevSlide} />
      </div>
        <div className='absolute top-[50%] text-3xl text-white cursor-pointer right-6 xl:right-[50px] z-20'>
        <BsArrowRightSquareFill className='' size={25} onClick={nextSlide} />
        </div>
        
        {sliderData.map((item, index) => (
            <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                 {index === slide && (
                <Image alt="" src={item.url} width={900} height={600} className='w-full h-full rounded-md'/>
                 )}
            </div>
        ))}
    </div>
        
  )
}


export default Carousel