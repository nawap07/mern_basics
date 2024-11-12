import { Pawan } from "../models/pawan.model.js";

const getPawan=async(req,res)=>{
    const allPawan=await Pawan.find();
    if(!allPawan || allPawan.length===""){
        res.status(400).json({
            success:false,
            message:"No any Pawan"
        })
    }
    res.status(200).json({
        success:true,
        message:allPawan
    })

}

const postPawan=async(req,res)=>{
    const pawan =req.body
    const pawanPost=new Pawan(pawan);
    if(!pawanPost){
        res.status(400).json({
            success:false,
            message:"Not Create a Pawan"
        })
    }
    await pawanPost.save();
    res.status(200).json({
        success:true,
        message:pawanPost
    })
}

const deletePawan=async(req,res)=>{
    const {id}=req.params;
    const pawanDelete=await Pawan.findByIdAndDelete(id);
    if(!pawanDelete){
        res.status(400).json({
            success:false,
            message:"Not Delete Pawan"
        })
    }
    res.status(200).json({
        success:true,
        message:pawanDelete
    })
}

const updatePawan=async(req,res)=>{
    const {id}=req.params;
    const {name,price,image}=req.body;
    const pawanUpdate=await Pawan.findByIdAndUpdate(id, {name,price,image},{new:true});
    if(!pawanUpdate){
        res.status(400).json({
            success:false,
            message:"Not Update Pawan"
        })
    }
    res.status(200).json({
        success:true,
        message:pawanUpdate
    })
}
export {getPawan , postPawan, deletePawan, updatePawan}