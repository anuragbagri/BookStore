import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from "react-router-dom"

const Course = () => {
  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'> here !</span></h1>
      <p className='mt-10'>Welcome to a new era of learning! Our premium courses are designed to give you the skills and knowledge you need to excel in your career 
        and personal development. Whether you're looking to advance in your current job, pivot to a new field, or simply expand your horizons, 
        our expertly crafted courses offer something for everyone</p>
        <Link to="/">
         <button className='mt-6 bg-pink-500 px-2 py-2 rounded-md text-white hover:bg-pink-700 duration-300 '> back</button>
        </Link>
     </div>
     <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
     {
    list.map((item) => {
      const alternativeImage = "https://img.freepik.com/premium-vector/vector-stack-books_1092023-6825.jpg?ga=GA1.1.585979378.1698664967&semt=ais_hybrid"; // Replace with your actual alternative image URL

      const updatedItem = {
        id:item.id,
        name:item.name,
        title :item.title ,
        price:item.price,
        category:item.category,          // Keep all existing properties from `item`
        image: alternativeImage // Override the `image` property
      };

       return (
        <Cards 
          item={updatedItem} 
          key={item.id} 
        />
      );
    })
  }
     </div>
    </div>
    </>
  )
}

export default Course