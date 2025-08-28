import { connectWithDB } from "./config/mongoose"
import { appServer } from "./config/server"

export async function init() {
  try {
    await connectWithDB()
    appServer()
  } catch (error) {
    console.log(error)
  }
}

init()
