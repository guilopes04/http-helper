import {
  OKResponse,
  HttpResponse,
  NoContentResponse,
  CreatedResponse
} from '../src/http-response'

describe('CustomResponse', () => {
  it('should return a valid HTTP response for OKResponse', () => {
    const body = { message: 'Success' }
    const response = new OKResponse(body).toHttpResponse()

    expect(response.statusCode).toBe(200)
    expect(response.body).toBe(JSON.stringify(body))
    expect(response.headers).toEqual({ 'Access-Control-Allow-Origin': '*' })
  })

  it('should return a valid HTTP response for NoContentResponse', () => {
    const response = new NoContentResponse().toHttpResponse()

    expect(response.statusCode).toBe(204)
    expect(response.body).toBeNull()
    expect(response.headers).toEqual({ 'Access-Control-Allow-Origin': '*' })
  })

  it('should return a valid HTTP response for CreatedResponse', () => {
    const response = new CreatedResponse().toHttpResponse()

    expect(response.statusCode).toBe(201)
    expect(response.body).toBeNull()
    expect(response.headers).toEqual({ 'Access-Control-Allow-Origin': '*' })
  })
})
