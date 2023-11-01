export type HttpRequest = {
  headers: Record<string, string>;
  pathParameters: Record<string, string>;
  queryStringParameters: Record<string, string>;
  body: any;
  context: {
    tenantId?: string;
    authorizer?: { username?: string };
    path?: string;
  };
};

export type HttpResponse = {
  statusCode: number;
  body?: any;
  headers?: Record<string, string>;
};
