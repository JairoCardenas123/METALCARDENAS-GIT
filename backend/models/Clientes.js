import {Schema, model} from "mongoose";

const clientesSchema = Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim:true,
        },
        email:{
            type: String,
            required: true,
            trim:true,
        },
        direccion:{
            type: String,
            required: true,
            trim:true,
        },
        celular:{
            type: String,
            required: true,
            trim:true,
        },
        cedula:{
            type: String,
            required: true,
            trim:true,
        },
        contactoRespaldo:{
            type: String,
            required: true,
            trim:true,
        }
    },
    {
        timestamps:true
    }
)

const Clientes = model("Clientes", clientesSchema, "Clientes");

export default Clientes;