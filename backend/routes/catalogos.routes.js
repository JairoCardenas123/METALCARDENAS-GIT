import { Router } from "express";
import { check } from "express-validator";
/* import validateDocuments from "../middlewares/validate.documents.js"; */
/* import Equipos from "../models/Equipos.js"; */

import { obtainCatalogos, obtainOneCiclista,deleteCiclista,insertCatalogo,updateCiclista } from "../controllers/catalogos.controllers.js";


const router = Router();

router.get("/all",obtainCatalogos);

router.get("/one/:id",obtainOneCiclista);

router.post("/add",insertCatalogo);

router.delete("/del/:id",deleteCiclista);

router.patch("/upd/:id",updateCiclista);

export default router;