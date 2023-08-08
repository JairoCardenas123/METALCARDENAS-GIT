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
        const catalogo = await Catalogos.findOne({_id:req.params.id});
        res.json(catalogo)
    } catch (error) {
        console.log(error);
    }
}

const deleteCiclista = async (req, res)=>{
    try {
        await Catalogos.deleteOne({_id:req.params.id});
        res.status(200).send({
            response:"A la verga la info"
        })
    } catch (error) {
        console.log(error);
    }
}

const updateCiclista = async (req, res)=>{{
    try {
        const catalogo = await Catalogo.findOne({_id:req.params.id})

        if (req.body.nombre) {
            catalogo.nombre = req.body.nombre;
            
        }
        if (req.body.edad) {
            catalogo.edad = req.body.edad;
            
        }

        if (req.body.país) {
            catalogo.país = req.body.país;
            
        }
        if (req.body.equipo) {
            catalogo.equipo = req.body.equipo;
            
        }
        if (req.body.victorias) {
            catalogo.victorias = req.body.victorias;
            
        }
  

        await catalogo.save();
        res.send(catalogo);

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