import { Catch, ArgumentsHost, HttpException, HttpStatus, ExceptionFilter } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';
import { MyLoggerService } from './my-logger/my-logger.service'; // Ensure the correct path
import { PrismaClientValidationError } from '@prisma/client/runtime/library';

// Define the response structure
type MyResponseObj = {
  statusCode: number;
  timestamp: string;
  path: string;
  response: string | object;
};

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly logger: MyLoggerService) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const myResponseObj: MyResponseObj = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      timestamp: new Date().toISOString(),
      path: request.url,
      response: 'Internal Server Error',
    };

    // Check for specific error types and customize the response
    if (exception instanceof HttpException) {
      myResponseObj.statusCode = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
      myResponseObj.response = exception.getResponse();
    } else if (exception instanceof PrismaClientValidationError) {
      myResponseObj.statusCode = HttpStatus.UNPROCESSABLE_ENTITY; // 422
      myResponseObj.response = exception.message.replace(/\n/g, ' ');
    } else if (exception instanceof Error) {
      myResponseObj.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      myResponseObj.response = exception.message;
    }

    // Ensure the status code is valid
    if (!HttpStatus[myResponseObj.statusCode]) {
      myResponseObj.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      myResponseObj.response = 'Invalid status code';
    }

    // Send the JSON response
    response.status(myResponseObj.statusCode).json(myResponseObj);

    // Log the error details
    this.logger.error(
      `Error occurred: ${myResponseObj.response} - ${exception instanceof Error ? exception.stack : ''}`,
      AllExceptionsFilter.name
    );
  }
}
