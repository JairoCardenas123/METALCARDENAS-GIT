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
    check('cliente').custom(async(cliente='')=>{
        const existeEquipo = await Clientes.findOne({cliente});
        if (!existeEquipo) {
            throw new Error(`El cliente ${cliente} no esta registrado`)
            
        }

    }),
    validateDocuments
],insertClientes);

router.delete("/del/:id",deleteCliente);

router.patch("/upd/:id",updateCliente);

export default router;