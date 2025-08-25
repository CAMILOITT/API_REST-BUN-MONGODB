import { serve } from "bun"
import { connectWithDB } from "./src/config/mongoose"
import { ProductsModel } from "./src/model/products.model"

await connectWithDB()

serve({
  port: 3000,
  routes: {
    "/api/products": {
      GET: async () => {
        const products = await ProductsModel.find()
        return new Response(JSON.stringify(products), {
          headers: { "Content-Type": "application/json" },
        })
      },
      POST: async request => {
        const data = await request.json()
        const newProduct = new ProductsModel(data)
        await newProduct.save()
        return new Response(JSON.stringify(newProduct), {
          headers: { "Content-Type": "application/json" },
          status: 201,
        })
      },
    },
  },
  fetch(request) {
    return new Response("fallback response")
  },
})
