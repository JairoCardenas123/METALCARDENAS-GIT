import { Router } from "express";
import { check } from "express-validator";
/* import validateDocuments from "../middlewares/validate.documents.js"; */
/* import Equipos from "../models/Equipos.js"; */

import {obtainCliente,obtainOneCiclista,deleteCiclista,insertCiclista,updateCiclista } from "../controllers/clientes.controllers.js";


const router = Router();

router.get("/all",obtainCliente);

router.get("/one/:id",obtainOneCiclista);

router.post("/add",insertCiclista);

router.delete("/del/:id",deleteCiclista);

router.patch("/upd/:id",updateCiclista);

export default router;