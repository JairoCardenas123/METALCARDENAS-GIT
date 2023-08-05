import express from "express";
import cors from "cors";

import routerCatalogos from "../routes/catalogos.routes.js";
import routerClientes from "../routes/clientes.routes.js";
import routerCotizaciones from "../routes/cotizaciones.routes.js"
/* import routerEquipos from "../routes/equipos.routes.js";
import routerPatrocinadores from "../routes/patrocinadores.routes.js";
import routerPodiums from "../routes/podiums.routes.js"; */



class Server{


    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;

        this.catalogoPatch = "/api/Catalogos";
        this.clientesPatch = "/api/Clientes";
        this.cotizacionesPatch = "/api/Cotizaciones";
        /*        this.equiposPath = "/api/equipos";
        this.patrocinadoresPath = "/api/patrocinadores"
        this.podiumsPath = "/api/podiums" */


        // ! Middleware
        this.middlewares();
 

        //! Routes
        this.routes();
    }

    middlewares(){

        //! Cors
        this.app.use(cors());

        // ? PUBLIC DIRECTORY
        this.app.use(express.static('public'));

        //! EXPRESS JSON
        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.catalogoPatch, routerCatalogos)
        this.app.use(this.clientesPatch, routerClientes)
        this.app.use(this.cotizacionesPatch, routerCotizaciones)
/*         this.app.use(this.equiposPath, routerEquipos)
        this.app.use(this.patrocinadoresPath, routerPatrocinadores)
        this.app.use(this.podiumsPath, routerPodiums) */
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server: ${this.port} `);
        })
    }
}

export default Server;