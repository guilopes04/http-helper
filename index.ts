import {
  CustomError,
  NotFoundError,
  OKResponse,
  ServerError
} from './http-response'

const handler = async () => {
  console.log('starting handler')
  try {
    const user = {
      id: 1,
      name: 'Guilherme Lopes',
      age: 21
    }

    if (!user) throw new NotFoundError()

    console.log('user: ', user)

    return new OKResponse({ user }).toHttpResponse()
  } catch (e) {
    console.error(e)

    if (e instanceof CustomError) e.toHttpResponse()

    return new ServerError().toHttpResponse()
  }
}

handler()
