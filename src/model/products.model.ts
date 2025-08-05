import mongoose from "mongoose"

const productsSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
  },
  {
    methods: {
      getPriceWithTax() {
        return (this.price ?? 0) * 1.2
      },
    },
  },
)

export type Product = mongoose.InferSchemaType<typeof productsSchema>
export const ProductsModel = mongoose.model<Product>("Products", productsSchema)
