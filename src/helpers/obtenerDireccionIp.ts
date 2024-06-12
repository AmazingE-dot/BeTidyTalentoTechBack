import axios from "axios";
import { config } from "../config/config";

const enviroment = config[process.env.NODE_ENV || "desarrollo"];
const ipApiBaseUrl = enviroment.ipApi;

export const obtenerUbicacionPorIp = async (
  ipAddress: string,
  apiBaseUrl: string = ipApiBaseUrl
) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/${ipAddress}`);

    if (response.data.status !== "success"){
        throw new Error(
            "La solicitud a la api no fue exitosa " + response.data.message
        )
    }

    console.log("Respuesat de la IP", response.data);
    return response.data
  } catch (error) {
    console.log(error);
  }
};
