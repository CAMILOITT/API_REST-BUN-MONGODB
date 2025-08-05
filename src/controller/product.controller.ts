import { ProductsModel } from "../model/products.model"

export function getProducts() {
  return ProductsModel.find().exec()
}
