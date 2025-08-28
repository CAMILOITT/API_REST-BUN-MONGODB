import mongoose from "mongoose"

export async function connectWithDB() {
  try {
    const { DB_HOST, DB_NAME, DB_USER } = process.env

    const URI = `mongodb://${DB_USER}:${DB_HOST}/${DB_NAME}`
    await mongoose.connect(URI)
  } catch (error) {
    console.log(error)
  }
}
