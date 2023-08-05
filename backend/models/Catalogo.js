import {Schema, model} from "mongoose";

const catalogosSchema = Schema(
    {
        nombre:{
            type: String,
            required: true,
            trim:true,
        },
        descripcion:{
            type: String,
            required: true,
            trim:true,
        },
        tiempo:{
            type: String,
            required: true,
            trim:true,
        },
        costo:{
            type: String,
            required: true,
            trim:true,
        }
    },
    {
        timestamps:true
    }
)

const Catalogos = model("Catalogos", catalogosSchema, "Catalogos");

export default Catalogos;