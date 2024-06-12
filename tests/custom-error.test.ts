import {
  ServerError,
  ForbiddenError,
  NotFoundError,
  MissingParamError,
  UnprocessableEntityError,
  ReferenceDoesNotExistsError
} from '../src/http-response'

describe('CustomError', () => {
  it('should return a valid HTTP response for ServerError', () => {
    const error = new ServerError().toHttpResponse()

    expect(error.statusCode).toBe(500)
    expect(error.body).toBe(
      JSON.stringify({
        errorCode: 'SERVER_ERROR',
        errorMessage: 'Internal Server Error',
        displayMessage: 'Ocorreu um erro inesperado'
      })
    )
    expect(error.headers).toEqual({ 'Access-Control-Allow-Origin': '*' })
  })

  it('should return a valid HTTP response for ForbiddenError', () => {
    const message = 'You do not have permission'
    const error = new ForbiddenError(message).toHttpResponse()

    expect(error.statusCode).toBe(403)
    expect(error.body).toBe(
      JSON.stringify({
        errorCode: 'FORBIDDEN_ERROR',
        errorMessage: `Forbidden error: ${message}`,
        displayMessage: 'Acesso não permitido'
      })
    )
    expect(error.headers).toEqual({ 'Access-Control-Allow-Origin': '*' })
  })

  it('should return a valid HTTP response for NotFoundError', () => {
    const error = new NotFoundError().toHttpResponse()

    expect(error.statusCode).toBe(404)
    expect(error.body).toBe(
      JSON.stringify({
        errorCode: 'NOT_FOUND_ERROR',
        errorMessage: 'Not found error',
        displayMessage: 'Não encontrado'
      })
    )
    expect(error.headers).toEqual({ 'Access-Control-Allow-Origin': '*' })
  })

  it('should return a valid HTTP response for MissingParamError', () => {
    const error = new MissingParamError('param1', 'param2').toHttpResponse()

    expect(error.statusCode).toBe(400)
    expect(error.body).toBe(
      JSON.stringify({
        errorCode: 'MISSING_PARAM_ERROR',
        errorMessage: 'Missing input parameter(s): param1, param2',
        displayMessage: 'Os seguintes campos requerem um valor: param1, param2'
      })
    )
    expect(error.headers).toEqual({ 'Access-Control-Allow-Origin': '*' })
  })

  it('should return a valid HTTP response for UnprocessableEntityError', () => {
    const error = new UnprocessableEntityError(
      'param1',
      'param2'
    ).toHttpResponse()

    expect(error.statusCode).toBe(422)
    expect(error.body).toBe(
      JSON.stringify({
        errorCode: 'UNPROCESSABLE_ENTITY_ERROR',
        errorMessage: 'Invalid input parameter(s): param1, param2',
        displayMessage:
          'Os seguintes campos contêm valores inválidos: param1, param2'
      })
    )
    expect(error.headers).toEqual({ 'Access-Control-Allow-Origin': '*' })
  })

  it('should return a valid HTTP response for ReferenceDoesNotExistsError', () => {
    const error = new ReferenceDoesNotExistsError().toHttpResponse()

    expect(error.statusCode).toBe(404)
    expect(error.body).toBe(
      JSON.stringify({
        errorCode: 'REFERENCE_DOES_NOT_EXISTS',
        errorMessage: 'Reference does not exists',
        displayMessage: 'Referência não encontrada'
      })
    )
    expect(error.headers).toEqual({ 'Access-Control-Allow-Origin': '*' })
  })
})
