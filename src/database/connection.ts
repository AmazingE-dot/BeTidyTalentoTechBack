import mongoose from "mongoose";

export const dbConnection = async () => {
    
    try {
        const dbUrl = process.env.DB_CONNECTION;

        if (!dbUrl){
            throw new Error  ("Error en la conexión de la base de datos no url");
        }
    await mongoose.connect(dbUrl);
    console.log("DB Online")
    } catch (error) {
        
        console.log("Error", error);

    }
}