import Cotizaciones from "../models/Cotizaciones.js";

const obtainCotizacion = async (req,res)=>{
    try {
        const cotizaciones= await Cotizaciones.find();
        res.json(cotizaciones)

    } catch (error) {
        console.log("error");
    }
}


const insertCotizacion= async(req,res)=>{
    const cotizaciones = new Cotizaciones(req.body);
    
    try {
        const newCiclista = await cotizaciones.save();
        res.json(newCiclista);

    } catch (error) {
        console.log(error);
    }
}

const obtainOneCotizacion = async(req,res)=>{
    try {
        const cotizaciones = await Cotizaciones.findOne({_id:req.params.id});
        res.json(cotizaciones)
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
        const cotizaciones = await Cotizaciones.findOne({_id:req.params.id})
        console.log(cotizaciones);
        if (req.body.Cliente) {
            cotizaciones.Cliente = req.body.Cliente;
            
        }
        if (req.body.Concepto) {
            cotizaciones.Concepto = req.body.Concepto;
            
        }

        if (req.body.ModoDePago) {
            cotizaciones.ModoDePago = req.body.ModoDePago;
            
        }
        if (req.body.PlazoFinal) {
            cotizaciones.PlazoFinal = req.body.PlazoFinal;
            
        }
        if (req.body.Criterios) {
            cotizaciones.Criterios = req.body.Criterios;
            
        }
        if (req.body.Costo) {
            cotizaciones.Costo = req.body.Costo;
            
        }

  

        await cotizaciones.save();
        res.send(cotizaciones);

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