import React, { useEffect, useState } from 'react'
import { useProductStore } from '../store/pawan';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

const Create = () => {
  const [newProuct, setNewProuct] = useState({
    name: "",
    price: "",
    image: "",
  })

  const [search, setSearch] = useSearchParams()
  const SerchId = search.get("searchID");
  const { createProduct, products ,updateProducts } = useProductStore()

  async function handlePawanProuct(e) {
    e.preventDefault();
    if(SerchId){
      await updateProducts(SerchId,newProuct)
    }else{
      await createProduct(newProuct)
      toast.success("Add Products")
    }
    
    setNewProuct({name:"",price:"",image:""})
    setSearch({})
  }

  useEffect(() => {
    if (SerchId) {
      const data = products.find((product) => product?._id === SerchId)
      if(data){
        setNewProuct({name:data.name,price:data.price,image:data.image})
      }

    }
  }, [SerchId])
  return (
    <div>
      <h2> {SerchId ? "Update a Product" : "Create a New Product"}</h2>
      <form>
        <input type="text" placeholder='Prouct Name' value={newProuct.name} onChange={(e) => setNewProuct({ ...newProuct, name: e.target.value })} />
        <input type="number" placeholder='Prouct Price' value={newProuct.price} onChange={(e) => setNewProuct({ ...newProuct, price: e.target.value })} />
        <input type="text" placeholder='Prouct URL' value={newProuct.image} onChange={(e) => setNewProuct({ ...newProuct, image: e.target.value })} />
        <button onClick={handlePawanProuct}>{SerchId ? "Update Product" : "Create Product"}</button>
      </form>
    </div>
  )
}

export default Create