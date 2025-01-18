import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from 'express';
import { ServiceError } from "src/common/service_error";
import { ProjectsService } from "../projects.service";

@Injectable()
export class ProjectGuard implements CanActivate {
    constructor(private readonly service: ProjectsService) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const hasProjectName = request.headers['project-name'] != undefined;
        const hasToken = request.headers['project-token'] != undefined;
        if (!hasToken || !hasProjectName)
            throw ServiceError.AccessDenied();
        const token = request.headers['project-token'];
        const name = request.headers['project-name'];
        return await this.service.isValidProjectAccessToken(name, token);
    }
} 