import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import { router } from "./routers/product.route.js";

const app = express();
app.use(express.json());
dotenv.config();
const port=process.env.PORT ||5000
5000 
app.use("/api",router)
app.listen(port, () => {
    connectDB();
    console.log(`Server id started at port http://localhost${port}`);

})