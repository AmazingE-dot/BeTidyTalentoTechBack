import { validateFields } from "./../middlewares/validate-fields";
import { Router } from "express";
import {
  crearUsuario,
  deleteUsuario,
  getUsuario,
  getUsuarios,
  updateUsuario,
} from "../controllers/usuario.controller";
import { check } from "express-validator";
import { validateJWT } from "../middlewares/validate-jwt";

const router = Router();

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("numeroDocumento", "El número de documento es obligatorio")
      .not()
      .isEmpty(),
    check("email", "El correo electrónico es obligatorio")
      .not()
      .isEmpty()
      .isEmail(),
    validateFields,
  ],
  crearUsuario
);
router.get("/", validateJWT, getUsuarios);
router.get("/:id", validateJWT, getUsuario);
router.put("/:id", validateJWT, updateUsuario);

router.delete("/:id", validateJWT, deleteUsuario);

export default router;