import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

import { errorHandler } from 'supertokens-node/framework/express';
import { Error } from 'supertokens-node';

@Catch(Error)
export class SupertokensExceptionFilter implements ExceptionFilter {
  handler: ErrorRequestHandler;

  constructor() {
    this.handler = errorHandler();
  }

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    this.handler(
      exception,
      ctx.getRequest<Request>(),
      ctx.getResponse<Response>(),
      ctx.getNext<NextFunction>(),
    );
  }
}
