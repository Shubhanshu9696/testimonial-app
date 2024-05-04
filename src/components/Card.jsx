import React, { useState } from 'react'
// import {FaQuoteLeft , FaQuoteRight} from 'react-fontawesome';
import { FaQuoteLeft, FaQuoteRight, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import {  } from "react-icons/fa6";

export const Card = ( { review, previousHandler, nextHandler } ) => {

  
  return (
    <div className='flex flex-col relative w-6/12 mx-auto bg-white items-center gap-2'>
      <div className='top-[-5rem] left-[-15rem] z-[10] relative bg-purple-500 rounded-full'>
        <img className='aspect-square rounded-full w-[140px] h-[140px] z-25 relative bottom-[-0.5rem] left-[-0.5rem]'
          src={review.image} />
      </div>

      <div className='flex items-center flex-col mt-[-4rem]  '>
        <div className=' text-2xl text-black font-medium'>
          {review.name}
        </div>


        <div className='text-purple-500'>
          {review.job}
        </div>

        <div className='my-4  text-purple-500'>
          <FaQuoteLeft />
        </div>

        <div className='px-8 text-justify'>
          {review.text}
        </div>

        <div className='text-purple-500 my-5'>
          <FaQuoteRight />
        </div>

        <div className='flex flex-row gap-3 my-3'  >
          <button className='text-purple-500' onClick={previousHandler} > <FaAngleLeft /> </button>
          <button className='text-purple-500' onClick={nextHandler}> <FaAngleRight /> </button>
        </div>

        <div >
          <button className='bg-purple-400 px-6 rounded-md py-0.5 text-white text-center text-lg  my-5' > Surprise me</button>
        </div>
      </div>

    </div>
  )
}

// export default Card;