import { Router } from "express";
import { check } from "express-validator";
 import validateDocuments from "../middlewares/validate.documents.js"; 
import Cotizaciones from "../models/Cotizaciones.js";
import {obtainCotizacion,obtainOneCotizacion,deleteCotizacion,insertCotizacion,updateCotizacion } from "../controllers/cotizaciones.controllers.js";


const router = Router();

router.get("/all",obtainCotizacion);

router.get("/one/:id",obtainOneCotizacion);

router.post("/add",[
    check('Cliente','Nombre es requerido').not().isEmpty(),
    check('concepto').custom(async(concepto='')=>{
        const existeEquipo = await Cotizaciones.findOne({concepto});
        if (!existeEquipo) {
            throw new Error(`El concepto ${concepto} no esta registrado`)
            
        }

    }),
    validateDocuments
],insertCotizacion);

router.delete("/del/:id",deleteCotizacion);

router.patch("/upd/:id",updateCotizacion);

export default router;