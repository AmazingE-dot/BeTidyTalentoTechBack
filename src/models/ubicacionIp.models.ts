// Respuesat de la IP {
//     status: 'success',
//     country: 'Colombia',
//     countryCode: 'CO',
//     region: 'DC',
//     regionName: 'Bogota D.C.',
//     city: 'Bogotá',
//     lon: -74.0833,
//     timezone: 'America/Bogota',     
//     isp: 'ETB - Colombia',
//     org: 'ETB - Colombia',
//     as: 'AS19429 ETB - Colombia',   
//     query: '186.29.34.44'
//   }

import { Model, Schema, model } from "mongoose";

const UbicacionSchema = new Schema({
    country: { type: String, required: false },
    countryCode: { type: String, required: false },
    region: { type: String, required: false },
    regionName: { type: String, required: false },
    city: { type: String, required: false },
    lon: { type: String, required: false },
    timezone: { type: String, required: false },
    isp: { type: String, required: false },
    org: { type: String, required: false },
    as: { type: String, required: false },
    query: { type: String, required: false },
    createdAt: { type: Date, default: Date.now() },
    usuario: { type: Schema.Types.ObjectId, ref: "usuario", required: true },
  });
  
  const UbicacionModel: Model<any> = model("ubicacion", UbicacionSchema);
  export default UbicacionModel;
  