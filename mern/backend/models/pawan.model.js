import {Schema , model} from "mongoose"

const pawanSchema=new Schema({
    name:{
        type:String,
        require:true
    },
     price:{
        type:Number,
        require:true
    },
     image:{
        type:String,
        require:true
    },
},{timestamps:true})

export const Pawan = model("Pawan",pawanSchema)