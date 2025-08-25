import * as mongoose from "mongoose"

const ProductsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: String, required: true }, // basic product information
    brand: { type: String, required: true },
    discount: { type: Number, required: true }, // info comercial
    active: { type: Number, required: true }, // visibility control
    weight: { type: Number, required: true },
    dimension: {
      width: { type: Number, min: 0, required: true },
      height: { type: Number, min: 0, required: true },
      depth: { type: Number, min: 0, required: true },
    }, // util for send
    qualification: [{ type: Number, required: true, min: 0, max: 5 }], // feedback
  },
  {
    timestamps: true, // audit control
  },
)

export type Product = mongoose.InferSchemaType<typeof ProductsSchema>
export const ProductsModel = mongoose.model<Product>("Products", ProductsSchema)
