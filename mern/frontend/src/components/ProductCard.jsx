import React from 'react'
import { useProductStore } from '../store/pawan'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    const{deleteProduct}=useProductStore()

    function handleDelete(id){
        deleteProduct(id)
    }
  return (
    <div className=''> 
        <img src={product?.image} alt={product?.name}  className='w-24'/>
        <h2>{product?.name}</h2>
        <h3>{product?.price}</h3>
        <button onClick={()=>handleDelete(product?._id)}>Delete</button>
        <Link to={`/create?searchID=${product?._id}`}> <button onClick={()=>handleEdit(product?._id)}>Edit</button></Link>
    </div>
  )
}

export default ProductCard