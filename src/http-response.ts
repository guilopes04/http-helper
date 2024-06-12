export type HttpResponse = {
  statusCode: number
  body?: any
  headers?: Record<string, string>
}

export type ApiErrorResponseBody = {
  statusCode: number
  errorCode?: string
  errorMessage?: string
  displayMessage?: string
}

export type CustomResponseProps = {
  statusCode: number
  body?: any
}

export class CustomResponse {
  constructor(protected readonly props: CustomResponseProps) {}

  toHttpResponse(): HttpResponse {
    return {
      statusCode: this.props.statusCode ?? 500,
      body: JSON.stringify(this.info) ?? null,
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
  }

  protected get info() {
    const { body } = this.props
    return body
  }
}

export class CustomError extends Error {
  constructor(protected readonly props: ApiErrorResponseBody) {
    super(props.errorMessage)
  }

  toHttpResponse(): HttpResponse {
    return {
      statusCode: this.props.statusCode ?? 500,
      body: JSON.stringify(this.info),
      headers: { 'Access-Control-Allow-Origin': '*' }
    }
  }

  protected get info() {
    const { errorCode, errorMessage, displayMessage } = this.props
    return {
      errorCode,
      errorMessage,
      displayMessage
    }
  }
}

export class ServerError extends CustomError {
  constructor() {
    super({
      statusCode: 500,
      errorCode: 'SERVER_ERROR',
      errorMessage: 'Internal Server Error',
      displayMessage: 'Ocorreu um erro inesperado'
    })
  }
}

export class ForbiddenError extends CustomError {
  constructor(message: string) {
    super({
      statusCode: 403,
      errorCode: 'FORBIDDEN_ERROR',
      errorMessage: 'Forbidden error: ' + message,
      displayMessage: 'Acesso não permitido'
    })
  }
}

export class NotFoundError extends CustomError {
  constructor() {
    super({
      statusCode: 404,
      errorCode: 'NOT_FOUND_ERROR',
      errorMessage: 'Not found error',
      displayMessage: 'Não encontrado'
    })
  }
}

export class MissingParamError extends CustomError {
  constructor(...params: string[]) {
    const s = params.join(', ')
    super({
      statusCode: 400,
      errorCode: 'MISSING_PARAM_ERROR',
      errorMessage: 'Missing input parameter(s): ' + s,
      displayMessage: 'Os seguintes campos requerem um valor: ' + s
    })
  }
}

export class UnprocessableEntityError extends CustomError {
  constructor(...params: string[]) {
    const s = params.join(', ')
    super({
      statusCode: 422,
      errorCode: 'UNPROCESSABLE_ENTITY_ERROR',
      errorMessage: 'Invalid input parameter(s): ' + s,
      displayMessage: 'Os seguintes campos contêm valores inválidos: ' + s
    })
  }
}

export class ReferenceDoesNotExistsError extends CustomError {
  constructor() {
    super({
      statusCode: 404,
      errorCode: 'REFERENCE_DOES_NOT_EXISTS',
      errorMessage: 'Reference does not exists',
      displayMessage: 'Referência não encontrada'
    })
  }
}

export class OKResponse extends CustomResponse {
  constructor(body: any) {
    super({
      statusCode: 200,
      body
    })
  }
}

export class NoContentResponse extends CustomResponse {
  constructor() {
    super({
      statusCode: 204
    })
  }
}

export class CreatedResponse extends CustomResponse {
  constructor() {
    super({
      statusCode: 201
    })
  }
}
