import Clientes from "../models/Clientes.js";

const obtainCliente = async (req,res)=>{
    try {
        const clientes= await Clientes.find();
        res.json(clientes)

    } catch (error) {
        console.log("error");
    }
}


const insertClientes= async(req,res)=>{
    const ciclista = new Clientes(req.body);
    
    try {
        const newCiclista = await ciclista.save();
        res.json(newCiclista);

    } catch (error) {
        console.log(error);
    }
}

const obtainOneCliente = async(req,res)=>{
    try {
        const ciclista = await Clientes.findOne({_id:req.params.id});
        res.json(ciclista)
    } catch (error) {
        console.log(error);
    }
}




const deleteCliente = async (req, res)=>{
    try {
        await Clientes.deleteOne({_id:req.params.id});
        res.status(200).send({
            response:"A la verga la info"
        })
    } catch (error) {
        console.log(error);
    }
}

const updateCliente = async (req, res)=>{{
    try {
        const clientes = await Clientes.findOne({_id:req.params.id})

        if (req.body.nombre) {
            clientes.nombre = req.body.nombre;
            
        }
        if (req.body.email) {
            clientes.email = req.body.email;
            
        }

        if (req.body.direccion) {
            clientes.direccion = req.body.direccion;
            
        }
        if (req.body.celular) {
            clientes.celular = req.body.celular;
            
        }
        if (req.body.cedula) {
            clientes.cedula = req.body.cedula;
            
        }
        if (req.body.contactoRespaldo) {
            clientes.contactoRespaldo = req.body.contactoRespaldo;
            
        }
  
  

        await clientes.save();
        res.send(clientes);

    } catch (error) {
        console.log(error);
    }
}}

export {
    obtainCliente,
    obtainOneCliente,
    insertClientes,
    deleteCliente,
    updateCliente
}