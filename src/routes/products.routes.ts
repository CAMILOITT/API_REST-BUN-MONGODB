import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controller/product.controller"

export const productsRoutes = {
  "/api/products/:id": {
    PUT: updateProduct,
    DELETE: deleteProduct,
    GET: getProduct,
  },
  "/api/products": {
    POST: createProduct,
    GET: getAllProducts,
  },
}
