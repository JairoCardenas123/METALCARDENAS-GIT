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
        const ciclista = await Cotizaciones.findOne({_id:req.params.id})
        console.log(ciclista);
        if (req.body.Cliente) {
            ciclista.Cliente = req.body.Cliente;
            
        }
        if (req.body.Concepto) {
            ciclista.Concepto = req.body.Concepto;
            
        }

        if (req.body.ModoDePago) {
            ciclista.ModoDePago = req.body.ModoDePago;
            
        }
        if (req.body.PlazoFinal) {
            ciclista.PlazoFinal = req.body.PlazoFinal;
            
        }
        if (req.body.Criterios) {
            ciclista.Criterios = req.body.Criterios;
            
        }
        if (req.body.Costo) {
            ciclista.Costo = req.body.Costo;
            
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