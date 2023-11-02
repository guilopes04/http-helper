# HTTP Helper: Respostas Customizadas e Tratamento de Erros

Este repositório contém uma coleção de classes e tipos que oferecem respostas HTTP personalizadas e tratamento de erros para aplicações web, proporcionando uma maneira eficaz de gerenciar códigos de status HTTP e respostas específicas para diferentes cenários.

## Funcionalidades

- **Classes de Resposta Personalizadas**:

  - `CustomResponse`: Fornece uma estrutura para criar respostas personalizadas para códigos de status HTTP desejados.
  - `OKResponse`: Especialização de `CustomResponse` para retornar um código de status 200 (OK).
  - `NoContentResponse`: Especialização de `CustomResponse` para retornar um código de status 204 (No Content).
  - `CreatedResponse`: Especialização de `CustomResponse` para retornar um código de status 201 (Created).

- **Classes de Erro Personalizadas**:
  - `CustomError`: Oferece uma estrutura para criar erros personalizados, incluindo códigos de erro, mensagens de erro e mensagens exibíveis para o cliente.
  - Especializações de `CustomError` como `ForbiddenError`, `NotFoundError`, `MissingParamError`, entre outros, para lidar com erros específicos, fornecendo informações detalhadas sobre o erro.

## Uso

As classes `CustomResponse` e `CustomError` fornecem métodos para transformar as instâncias em objetos `HttpResponse`, permitindo a manipulação de respostas HTTP customizadas e erros consistentes.

Exemplo de uso:

```javascript
// Criar uma resposta OK
const okResponse = new OKResponse({ message: 'Requisição bem-sucedida' })
const httpResponse = okResponse.toHttpResponse()
console.log(httpResponse) // Exibirá a resposta HTTP correspondente

// Criar um erro de acesso proibido (ForbiddenError)
const forbiddenError = new ForbiddenError('Acesso negado para este recurso')
const errorResponse = forbiddenError.toHttpResponse()
console.log(errorResponse) // Exibirá a resposta de erro correspondente
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias para a funcionalidade e documentação deste projeto.

## Licença

Este repositório está sob a licença [MIT](https://github.com/guilopes04/http-helper/blob/main/LICENSE).
