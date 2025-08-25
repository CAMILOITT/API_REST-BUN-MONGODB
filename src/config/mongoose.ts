import mongoose from "mongoose"

export async function connectWithDB() {
  const { HOST, URI, NAME_DATABASE } = process.env
  await mongoose.connect(`mongodb://${HOST}:${URI}/${NAME_DATABASE}`)
}
