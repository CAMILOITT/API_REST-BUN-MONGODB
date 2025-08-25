import type { BunRequest } from "bun"
import { ErrorResponse } from "../../utils/Error"
import { ProductsModel, type Product } from "../model/products.model"

export async function createProduct(req: BunRequest) {
  try {
    const body = (await req.json()) as Product

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
    const error = err as Error
    return Response.json(
      {
        message: "no se pudo crear el producto",
        message_err: error!.message,
      },
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}

export async function getAllProducts() {
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

export async function getProduct({ params }: BunRequest) {
  try {
    const { id } = params as { id: string }
    const product = await ProductsModel.findById(id)
    return Response.json(product, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    if (err instanceof ErrorResponse)
      return Response.json({ message: err.message }, { ...err })
    const error = err as Error
    return Response.json(
      { message_err: error!.message },
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}

export async function deleteProduct(req: BunRequest): Promise<Response> {
  try {
    const { id } = req.params as { id: string }
    if (!id) throw new ErrorResponse("parámetro id es requerido", 400)
    await ProductsModel.findByIdAndDelete(id)
    return new Response(null, { status: 204 })
  } catch (err) {
    if (err instanceof ErrorResponse)
      return Response.json({ message: err.message }, { ...err })
    const error = err as Error
    return Response.json(
      { message_err: error!.message },
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}

export async function updateProduct(req: BunRequest): Promise<Response> {
  try {
    const { id } = req.params as { id: string }
    if (!id) throw new ErrorResponse("parámetro id es requerido", 400)
    const bodyProduct = (await req.json()) as Product
    const newProduct = await ProductsModel.findByIdAndUpdate(
      id,
      { ...bodyProduct },
      { new: true },
    )
    if (!newProduct) throw new ErrorResponse("producto no encontrado", 404)
    return Response.json(
      { product: newProduct },
      { status: 204, headers: { "Content-Type": "application/json" } },
    )
  } catch (err) {
    if (err instanceof ErrorResponse)
      return Response.json({ message: err.message }, { ...err })
    const error = err as Error
    return Response.json(
      { message_err: error!.message },
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}
