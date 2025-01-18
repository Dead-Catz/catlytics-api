import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from 'express';
import { ServiceError } from "src/common/service_error";

@Injectable()
export class SystemGuard implements CanActivate {
    constructor() { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const hasToken = request.headers['system-token'] != undefined;
        if (!hasToken)
            throw ServiceError.AccessDenied();
        const token = request.headers['system-token'];
        return token == process.env.SYSTEM_TOKEN;
    }
} 