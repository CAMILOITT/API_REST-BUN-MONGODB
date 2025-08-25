import { ErrorResponse } from "../../utils/Error"
import { ProductsModel, type Product } from "../model/products.model"

export async function createProduct(request: Request) {
  try {
    const body = (await request.json()) as Product

    if (typeof body !== "object" || body === null)
      throw new ErrorResponse("Invalid request body", 400)

    if (!body.name || !body.price)
      throw new ErrorResponse("Nombre y precio son requeridos", 400)

    const product = new ProductsModel(body)
    await product.save()

    return Response.json(product, {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    if (err instanceof ErrorResponse)
      return Response.json({ message: err.message }, { ...err })

    return Response.json(
      { message: "no se pudo crear el producto" },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

export async function getProducts() {
  try {
    const products = await ProductsModel.find()
    return Response.json(products, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return Response.json(
      { message: "no se encontró productos" },
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

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
