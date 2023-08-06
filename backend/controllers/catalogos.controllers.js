import Catalogos from "../models/Catalogo.js";

const obtainCatalogos = async (req,res)=>{
    try {
        const catalogo= await Catalogos.find();
        res.json(catalogo)

    } catch (error) {
        console.log("error");
    }
}


const insertCatalogo= async(req,res)=>{
    const catalogo = new Catalogos(req.body);
    
    try {
        const newCatalogo = await catalogo.save();
        res.json(newCatalogo);

    } catch (error) {
        console.log(error);
    }
}

const obtainOneCiclista = async(req,res)=>{
    try {
        const ciclista = await Catalogos.findOne({_id:req.params.id});
        res.json(ciclista)
    } catch (error) {
        console.log(error);
    }
}

const deleteCiclista = async (req, res)=>{
    try {
        await Catalogo.deleteOne({_id:req.params.id});
        res.status(200).send({
            response:"A la verga la info"
        })
    } catch (error) {
        console.log(error);
    }
}

const updateCiclista = async (req, res)=>{{
    try {
        const ciclista = await Catalogo.findOne({_id:req.params.id})

        if (req.body.nombre) {
            ciclista.nombre = req.body.nombre;
            
        }
        if (req.body.edad) {
            ciclista.edad = req.body.edad;
            
        }

        if (req.body.país) {
            ciclista.país = req.body.país;
            
        }
        if (req.body.equipo) {
            ciclista.equipo = req.body.equipo;
            
        }
        if (req.body.victorias) {
            ciclista.victorias = req.body.victorias;
            
        }
  

        await ciclista.save();
        res.send(ciclista);

    } catch (error) {
        console.log(error);
    }
}}

export {
    obtainCatalogos,
    obtainOneCiclista,
    insertCatalogo,
    deleteCiclista,
    updateCiclista
}