import mongoose from "mongoose"
import { ProductsModel } from "./src/model/products.model"

// Connect to MongoDB
await mongoose.connect("mongodb://localhost:27017/mydatabase")

// create product
const product = new ProductsModel({
  name: "Sample Product",
  price: 100,
  description: "This is a sample product.",
})

// Save the product to the database
await product.save()

// read product of the db
const foundProduct = await ProductsModel.findOne({ name: "Sample Product" })

Bun.serve({
  fetch: request => {
    console.log("Received request:", request.method, request.url)
    return new Response("Hello, world!")
  },
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
})
