import { serve } from "bun"
import { productsRoutes } from "../routes/products.routes"

export function appServer() {
  serve({
    port: Bun.env.PORT || 3000,
    routes: { ...productsRoutes },
    fetch() {
      return new Response("fallback response")
    },
    error(error) {
      console.error(error)
      return new Response(`Internal Error: ${error.message}`, {
        status: 500,
        headers: {
          "Content-Type": "text/plain",
        },
      })
    },
  })
}
