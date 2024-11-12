import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosCreate } from "react-icons/io";
import { useProductStore } from '../store/product';

const Navbar = () => {
  const {products,setProducts}=useProductStore();
  return (
    <div className='w-full px-1 flex justify-around  p-3 bg-black text-white'> 
        <NavLink to={"/"} className='text-3xl text-red-500 font-semibold'>
            Product Store
        </NavLink>
        <NavLink to={"/create"}>
        <IoIosCreate size={40} />
        </NavLink>
    </div>
  )
}

export default Navbar