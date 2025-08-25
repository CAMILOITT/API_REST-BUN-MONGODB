import * as mongoose from "mongoose"

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  stock: { type: String, required: true }, // basic product information
  brand: { type: String, required: true },
  discount: { type: String, required: true }, // info comercial
  active: { type: String, required: true }, // visibility control
  weight: { type: String, required: true },
  dimension: {
    width: { type: Number, min: 0, required: true },
    height: { type: Number, min: 0, required: true },
    depth: { type: Number, min: 0, required: true },
  }, // util for send
  qualification: [{ type: Number, required: true, min: 0, max: 5 }], // feedback
  create_at: {
    type: Date,
    default: Date.now,
  },
  update_at: {
    type: Date,
    default: Date.now,
  }, // audit control
})

export type Product = mongoose.InferSchemaType<typeof productsSchema>
export const ProductsModel = mongoose.model<Product>("Products", productsSchema)
