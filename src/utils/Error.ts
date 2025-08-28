export class ErrorResponse extends Error {
  status: number
  headers: Record<string, string>

  constructor(
    message: string,
    status: number = 500,
    headers: Record<string, string> = { "Content-Type": "application/json" },
  ) {
    super(message)
    this.status = status
    this.headers = headers
  }
}
