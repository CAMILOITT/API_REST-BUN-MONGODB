declare module "bun" {
  interface Env {
    DB_USER: string
    DB_HOST: string
    DB_NAME: string
  }
}
