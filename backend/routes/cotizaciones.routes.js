import { Router } from "express";
import { check } from "express-validator";
/* import validateDocuments from "../middlewares/validate.documents.js"; */
/* import Equipos from "../models/Equipos.js"; */

import {obtainCotizacion,obtainOneCotizacion,deleteCotizacion,insertCotizacion,updateCotizacion } from "../controllers/cotizaciones.controllers.js";


const router = Router();

router.get("/all",obtainCotizacion);

router.get("/one/:id",obtainOneCotizacion);

router.post("/add",insertCotizacion);

router.delete("/del/:id",deleteCotizacion);

router.patch("/upd/:id",updateCotizacion);

export default router;