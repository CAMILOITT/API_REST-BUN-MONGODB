import { serve } from "bun"
import { connectWithDB } from "./src/config/mongoose"
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "./src/controller/product.controller"

await connectWithDB()

serve({
  port: 3000,
  routes: {
    "/api/products/:id": {
      PUT: updateProduct,
      DELETE: deleteProduct,
      GET: getProduct,
    },
    "/api/products": {
      POST: createProduct,
      GET: getAllProducts,
    },
  },
  fetch() {
    return new Response("fallback response")
  },
})
