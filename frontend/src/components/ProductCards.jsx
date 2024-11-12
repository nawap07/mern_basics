import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const ProductCards = ({product}) => {
    const {deleteProduct,updateProducts }=useProductStore()
    function handledelete(id){
        deleteProduct(id)
        toast.success("Delete the product")
    }
    
  return (
    <div className=''> 
        <img src={product.image} alt={product.name} className='w-32' />
        <h4>{product.name}</h4>
        <h4>{product.price}</h4>
         <Link to={`/create?searchId=${product._id}`}><button> <MdEdit size={30} color='skyblue'/></button></Link>
        <button onClick={()=>handledelete(product._id)}> <MdDeleteForever size={30} color='red'/></button>
    </div>
  )
}

export default ProductCards