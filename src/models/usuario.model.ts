import { Model, Schema, model } from "mongoose";

interface Opportunities {
  inProgress: number;
  successOpportunitie: number;
  loseOpportunitie: number;
}

interface UsuarioInterface {
  nombre: string;
  email: string;
  tipoDocumento: string;
  numeroDocumento: string;
  peso?: string;
  fechaNacimiento?: Date;
  password: string;
  rol?: string;
  opportunities?: Opportunities;
  token?: string;
  createdAt?: Date;
}

const UsuarioSchema = new Schema<UsuarioInterface>({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  tipoDocumento: { type: String, required: true },
  numeroDocumento: { type: String, required: true, unique: true },
  peso: { type: String },
  fechaNacimiento: { type: Date },
  opportunities: { type:Object, required: false, unique:false },
  password: { type: String },
  rol: { type: String, default: "USER" },
  token: { type: String, require: false },
  createdAt: { type: Date, default: Date.now() },
});

const UsuarioModel: Model<any> = model("usuario", UsuarioSchema);
export default UsuarioModel;
