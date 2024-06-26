import { Model, Schema, Types, model } from "mongoose";

interface Distribuidor {
  nit: string;
  razonSocial: string;
  telefono: number;
  direccion: string;
}

interface Opiniones {
  comentarios: string;
  calificacion: number;
  fecha?: Date;
}

interface ProductoInterface {
  image: string;
  nombre: string;
  SKU: string;
  cantidad: number;
  precio: number;
  distribuidor: Distribuidor;
  opiniones: Opiniones;
  createdAt: Date;
  usuario: Types.ObjectId;
}

const ProductoSchema = new Schema<ProductoInterface>({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  SKU: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: false,
  },
  cantidad: { type: Number, required: true, },
  precio: { type: Number, required: true },
  distribuidor: { type: Object, required: true },
  opiniones: { type: Object },
  
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  usuario: { type: Schema.Types.ObjectId, ref: "usuario", required: true },
});

const ProductoModel: Model<ProductoInterface> = model(
  "producto",
  ProductoSchema
);
export default ProductoModel;
