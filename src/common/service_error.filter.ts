import { ArgumentsHost, Catch, ExceptionFilter, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import { ServiceError } from "./service_error";

@Catch(ServiceError)
export class ServiceExceptionFilter implements ExceptionFilter {
    catch(exception: ServiceError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        var msg = 'Internal Server Error';
        var code = 500;
        // console.log(`exception_filter=`,exception);
        if (typeof (exception) == 'object' && 'error' in exception && 'code' in exception) {
            var e = exception as ServiceError;
            code = e.code;
            msg = e.error;
        } else {
            console.log(exception);
        }
        response
            .status(code)
            .json({
                statusCode: code,
                timestamp: new Date().toISOString(),
                path: request.url,
                error: msg,
            });
    }
}