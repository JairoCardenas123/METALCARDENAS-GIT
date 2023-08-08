import { Router } from "express";
import { check } from "express-validator";
 import validateDocuments from "../middlewares/validate.documents.js"; 
import Cotizaciones from "../models/Cotizaciones.js";
import {obtainCotizacion,obtainOneCotizacion,deleteCotizacion,insertCotizacion,updateCotizacion } from "../controllers/cotizaciones.controllers.js";


const router = Router();

router.get("/all",obtainCotizacion);

router.get("/one/:id",obtainOneCotizacion);

router.post("/add",[
    check('nombre','Nombre es requerido').not().isEmpty(),
    check('cotizaciones').custom(async(cotizaciones='')=>{
        const existeEquipo = await Cotizaciones.findOne({cotizaciones});
        if (!existeEquipo) {
            throw new Error(`El cotizaciones ${cotizaciones} no esta registrado`)
            
        }

    }),
    validateDocuments
],insertCotizacion);

router.delete("/del/:id",deleteCotizacion);

router.patch("/upd/:id",updateCotizacion);

export default router;