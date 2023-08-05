import {Schema, model} from "mongoose";

const cotizacionesSchema = Schema(
    {
        Cliente:{
            type: String,
            required: true,
            trim:true,
        },
        Concepto:{
            type: String,
            required: true,
            trim:true,
        },
        ModoDePago:{
            type: String,
            required: true,
            trim:true,
        },
        PlazoFinal:{
            type: String,
            required: true,
            trim:true,
        },
        Criterios:{
            type: String,
            required: true,
            trim:true,
        },
        Costo:{
            type: String,
            required: true,
            trim:true,
        }
    },
    {
        timestamps:true
    }
)

const Cotizaciones = model("Cotizaciones", cotizacionesSchema, "Cotizaciones");

export default Cotizaciones;