import { Router } from "express";
import { check } from "express-validator";
/* import validateDocuments from "../middlewares/validate.documents.js"; */
/* import Equipos from "../models/Equipos.js"; */

import {obtainCotizaciones,obtainOneCiclista,deleteCiclista,insertCiclista,updateCiclista } from "../controllers/cotizaciones.controllers.js";


const router = Router();

router.get("/all",obtainCotizaciones);

router.get("/one/:id",obtainOneCiclista);

router.post("/add",[
            check('nombre','Nombre es requerido').not().isEmpty(),
            check('equipo').custom(async(equipo='')=>{
                const existeEquipo = await Equipos.findOne({equipo});
                if (!existeEquipo) {
                    throw new Error(`El equipo ${equipo} no esta registrado`)
                    
                }

            }),
            /* validateDocuments */
],insertCiclista);

router.delete("/del/:id",deleteCiclista);

router.patch("/upd/:id",updateCiclista);

export default router;