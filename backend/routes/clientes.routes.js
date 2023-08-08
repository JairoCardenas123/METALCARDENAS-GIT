import { Router } from "express";
import { check } from "express-validator";
 import validateDocuments from "../middlewares/validate.documents.js"; 
import Clientes from "../models/Clientes.js";

import {obtainCliente,obtainOneCliente,deleteCliente,insertClientes,updateCliente} from "../controllers/clientes.controllers.js";


const router = Router();

router.get("/all",obtainCliente);

router.get("/one/:id",obtainOneCliente);

router.post("/add",[
    check('nombre','Nombre es requerido').not().isEmpty(),
    check('email').custom(async(email='')=>{
        const existeEquipo = await Clientes.findOne({email});
        if (!existeEquipo) {
            throw new Error(`El email ${email} no esta registrado`)
            
        }

    }),
    validateDocuments
],insertClientes);

router.delete("/del/:id",deleteCliente);

router.patch("/upd/:id",updateCliente);

export default router;