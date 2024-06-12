import express, { Application, Request, Response } from "express";
import { dbConnection } from "./database/connection";
import cors from "cors";
import usuarioRoutes from "./routes/usuario.route";
import routerProducto from "./routes/producto.route";
import authRoutes from "./routes/auth.route";
import interactionRoutes from "./routes/interaction.route";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuario: "/api/v1/usuario",
    producto: "/api/v1/producto",
    login: "/api/v1/login",
    interaction: "/api/v1/interaction",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    dbConnection();
    this.middleWares();
    this.routes();
  }

  miPrimerApi() {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({ msg: "Api funcionando" });
    });
  }

  middleWares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.miPrimerApi();
  }

  routes(): void {
    this.app.use(this.apiPaths.usuario, usuarioRoutes);
    this.app.use(this.apiPaths.producto, routerProducto);
    this.app.use(this.apiPaths.login, authRoutes);
    this.app.use(this.apiPaths.interaction, interactionRoutes);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log("Servidor en el puerto", this.port);
    });
  }
}

export default Server;