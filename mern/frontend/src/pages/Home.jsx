import React, { useEffect } from 'react'
import { useProductStore } from '../store/pawan'
import {Link} from "react-router-dom"
import ProductCard from '../components/ProductCard';

const Home = () => {
   const {fetchProduct ,products}=useProductStore();
  console.log(products)
   useEffect(()=>{
      fetchProduct();
   },[fetchProduct])
  return (
    <div className=''> 
{
  products && products.length>0? <div className="flex gap-5">
     {
      products.map((product)=>(
        <div className="" key={product?._id}>
          <ProductCard  product={product}/>
        </div>
      ))
     }
  </div>: <div className=""><h2>No Any Product <Link to={"/create"} ></Link></h2></div>

}
    </div>
  )
}

export default Home