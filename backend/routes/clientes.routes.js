import { Router } from "express";
import { check } from "express-validator";
/* import validateDocuments from "../middlewares/validate.documents.js"; */
/* import Equipos from "../models/Equipos.js"; */

import {obtainCliente,obtainOneCliente,deleteCliente,insertClientes,updateCliente} from "../controllers/clientes.controllers.js";


const router = Router();

router.get("/all",obtainCliente);

router.get("/one/:id",obtainOneCliente);

router.post("/add",insertClientes);

router.delete("/del/:id",deleteCliente);

router.patch("/upd/:id",updateCliente);

export default router;