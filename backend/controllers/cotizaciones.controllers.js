import Cotizaciones from "../models/Cotizaciones.js";

const obtainCiclista = async (req,res)=>{
    try {
        const clientes= await Cotizaciones.find();
        res.json(clientes)

    } catch (error) {
        console.log("error");
    }
}


const obtainOneCiclista = async(req,res)=>{
    try {
        const ciclista = await Catalogo.findOne({_id:req.params.id});
        res.json(ciclista)
    } catch (error) {
        console.log(error);
    }
}


const insertCiclista= async(req,res)=>{
    const ciclista = new Catalogo(req.body);
    
    try {
        const newCiclista = await ciclista.save();
        res.json(newCiclista);

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
    obtainCiclista,
    obtainOneCiclista,
    insertCiclista,
    deleteCiclista,
    updateCiclista
}