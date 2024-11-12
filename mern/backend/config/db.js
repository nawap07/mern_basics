import mongoose from "mongoose";

const connectDB=async()=>{
  try {
      await mongoose.connect(`${process.env.MONGO_URI}`)
      console.log(`Database is connected succeessfully`);
  } catch (error) {
    console.log(error.message);
    
  }
}

export {connectDB}