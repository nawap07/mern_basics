import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`DataBase is connected successfully`);
    } catch (error) {
        console.log(error.message);
        process.exit(1); // 1 code means failure , 0 means a success
    }
    
}

export {connectDB}