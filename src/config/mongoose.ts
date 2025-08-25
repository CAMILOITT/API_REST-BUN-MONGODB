import mongoose from "mongoose"

export async function connectWithDB() {
  try {
    const { USER_DB, HOST, NAME_DATABASE } = process.env
    await mongoose.connect(`mongodb://${USER_DB}:${HOST}/${NAME_DATABASE}`)
  } catch (error) {}
}
