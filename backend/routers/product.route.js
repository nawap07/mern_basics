import express from "express"
import { AllDatav, createData, deleteData, updateData } from "../controllers/product.controller.js";

const router = express.Router();


router.get("/products", AllDatav)
router.post("/products", createData)
router.delete("/products/:id", deleteData)
router.put("/products/:id", updateData)

export { router }