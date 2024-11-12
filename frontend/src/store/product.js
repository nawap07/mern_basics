import {create} from "zustand"

const useProductStore=create((set)=>({
    products:[],
    setProducts:(product)=>set({product}),
    createProduct:async(newProduct)=>{
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false , message:"All Fields are required"}
        }
        const res =await fetch("/api/products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data=await res.json();
        set((state)=>({products:[...state.products,data.message]}))
        return {success:true , message:"Add Product"}

    },
    fetchProduct:async()=>{
        const res=await fetch("/api/products")
        const data=await res.json();
        set({products:data.message})
    },
    deleteProduct:async(pid)=>{
        const res =await fetch(`/api/products/${pid}`,{
            method:"DELETE"
        })
        const data=await res.json();
        set(state=>({products:state.products.filter((product)=>product._id!==pid)}))
    },
    updateProducts:async(pid,updateProducts)=>{
        const res=await fetch(`/api/products/${pid}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updateProducts)
        })
        const data=await res.json();
        set(state=>({products:state.products.map((product)=>product._id===pid?data.message:product)}))
    }

}))

export {useProductStore}