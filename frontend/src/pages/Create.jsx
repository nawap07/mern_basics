import React, { useEffect, useState } from 'react'
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

const Create = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    })
    const [search,setSearch]=useSearchParams();
    const serchId=search.get("searchId")

    const { createProduct,products,updateProducts} = useProductStore()

    useEffect(()=>{
        if(serchId){
            const data=products.find((product)=>product._id ===serchId)
                setNewProduct({name:data?.name , price:data?.price , image:data.image})
        }
    },[serchId])
    

    async function hanleAddProduct(e) {
        e.preventDefault();
        if(serchId){
            updateProducts(serchId,newProduct)
            toast.success("Update the Product")
        }else{
            const {success,message}=await createProduct(newProduct)
            console.log(success,message);
            toast.success("Add Products")
        }
        setSearch({})
        setNewProduct({name:'',price:'',image:''})
    }
    return (
        <div className="bg-blue-900 w-full pt-10 h-screen">
            <div className='max-w-[800px] m-auto h-[500px] bg-blue-300 rounded-2xl p-5'>
                <h2 className='p-5 text-3xl font-semibold text-yellow-50  text-center mb-3'> {serchId?"Update a Product":"Create New Product"}</h2>
                <div className="">
                    <form action="" className='flex  flex-col justify-center gap-5 w-[80%] ml-20 p-10 bg-gray-100 mb-5 rounded-3xl'>
                        <input type="text" name='name' value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} placeholder='Product Name' className='p-3 rounded-xl outline-none bg--200' />
                        <input type="number" name='price' value={newProduct.price} placeholder='Price' className='p-3 rounded-xl outline-none' onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                        <input type="url" name='image' placeholder='Image Url' value={newProduct.image} className='p-3 rounded-xl outline-none' onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
                        <button className='bg-blue-950 p-3 rounded-2xl mt-2 text-xl text-white font-semibold' onClick={hanleAddProduct}> {serchId?"Update a Product":"Create a Product"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create