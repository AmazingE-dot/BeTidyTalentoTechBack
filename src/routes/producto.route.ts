import { Router } from "express";
import { crearProducto, deleteProducto, getProducto, getProductos, updateProducto } from "../controllers/producto.controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { validateJWT } from "../middlewares/validate-jwt";

const routerProducto = Router();

routerProducto.post(
    "/",
    validateJWT,
    [
      check("nombre", "El nombre del producto es obligatorio").not().isEmpty(),
      check("SKU", "El SKU del producto es obligatorio").not().isEmpty(),
      check("cantidad", "La cantidad del producto es obligatoria")
        .not()
        .isEmpty()
        .isNumeric(),
      check("precio", "El precio del producto es obligatorio")
        .not()
        .isEmpty()
        .isNumeric(),
      validateFields,
    ],
    crearProducto
  );
routerProducto.get('/', getProductos);
routerProducto.get('/:id', getProducto);
routerProducto.delete('/:id', deleteProducto);
routerProducto.put('/:id', updateProducto);

export default routerProducto