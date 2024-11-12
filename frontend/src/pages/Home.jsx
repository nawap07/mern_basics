import React, { useEffect } from 'react'
import { useProductStore } from '../store/product'
import { Link } from 'react-router-dom'
import ProductCards from '../components/ProductCards';

const Home = () => {
  const { fetchProduct, products} = useProductStore();
  useEffect(()=>{
    fetchProduct();
  },[fetchProduct])
  
  return (
    <div className="">
      <h1 className='text-center text-3xl font-semibold text-blue-500 pt-10'>Current Products</h1>

       <div className='w-full bg-gray-900 min-h-screen grid grid-cols-3'>
       {
        products ==="" ? <div className="text-center mt-10 text-xl font-semibold text-gray-200">
        No Product is found  || <span className='border-b-4 text-blue-500'><Link to={"/create"}>Create a Product</Link></span>
      </div> : products.map((product)=>(
        <div className="max-w-[1000px] m-auto" key={product._id}>
          <ProductCards product={product}/>
        </div>
      ))
       }
      
    </div>
    </div>
  )
}

export default Home