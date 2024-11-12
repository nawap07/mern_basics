
import { Product } from "../models/product.model.js";


const AllDatav = async(req, res) => {
    try {
        const allProucts=await Product.find();
        if(!allProucts || allProucts.length === 0){
            res.status(400).json({success:false,message:'No Any Proucts'})
        }
        res.status(200).json({success:true,message:allProucts})
    } catch (error) {
      res.status(500).json({success:false,message:"Server error"})
      
    }
  }
 const createData = async (req, res) => {
      const product = req.body;
  
      if (!product.name || !product.price || !product.image) {
          return res.status(400).json({
              success: false,
              message: "All Fields are required..."
          })
      }
  
      const newproducts = new Product(product)
      try {
          await newproducts.save();
          res.status(200).json({
              success: true,
              message: newproducts
          })
      } catch (error) {
          console.log(error.message);
          await newproducts.save();
          res.status(500).json({
              success: false,
              message: "Server error"
          })
      }
  }
  
   const deleteData = async(req,res)=>{
     try {
       const {id} =req.params;
       const deleteProuct=await Product.findByIdAndDelete(id);
       if(!deleteProuct){
          res.status(400).json({success:false,message:"No Product is deleted..."})
       }
       res.status(200).json({success:true,message:deleteProuct})
     } catch (error) {
      res.status(500).json({success:true,message:error.message})
     }
  }
 const updateData = async(req,res)=>{
     try {
       const {id}=req.params;
       const product=req.body;
  
   
       const updateProduct=await Product.findByIdAndUpdate(id,product,{new:true});
       if(!updateProduct){
           res.status(400).json({success:false,message:"Not update the Product"})
       }
       res.status(200).json({success: true,message: updateProduct})
     } catch (error) {
      res.status(500).json({success:false,message:"server Error"})
     }
  
  }

  export {AllDatav ,createData,updateData ,deleteData}