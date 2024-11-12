import express from "express"
import { deletePawan, getPawan, postPawan , updatePawan } from "../controllers/pawan.controller.js";
const router=express.Router();

router.get("/pawan",getPawan)
router.post("/pawan",postPawan)
router.delete("/pawan/:id",deletePawan)
router.put("/pawan/:id",updatePawan)




export {router}