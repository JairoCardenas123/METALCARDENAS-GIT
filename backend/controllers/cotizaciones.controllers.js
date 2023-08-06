import Cotizaciones from "../models/Cotizaciones.js";

const obtainCotizacion = async (req,res)=>{
    try {
        const clientes= await Cotizaciones.find();
        res.json(clientes)

    } catch (error) {
        console.log("error");
    }
}


const insertCotizacion= async(req,res)=>{
    const ciclista = new Cotizaciones(req.body);
    
    try {
        const newCiclista = await ciclista.save();
        res.json(newCiclista);

    } catch (error) {
        console.log(error);
    }
}

const obtainOneCotizacion = async(req,res)=>{
    try {
        const ciclista = await Cotizaciones.findOne({_id:req.params.id});
        res.json(ciclista)
    } catch (error) {
        console.log(error);
    }
}



const deleteCotizacion = async (req, res)=>{
    try {
        await Cotizaciones.deleteOne({_id:req.params.id});
        res.status(200).send({
            response:"A la verga la info"
        })
    } catch (error) {
        console.log(error);
    }
}

const updateCotizacion = async (req, res)=>{{
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
    obtainCotizacion,
    obtainOneCotizacion,
    insertCotizacion,
    deleteCotizacion,
    updateCotizacion
}