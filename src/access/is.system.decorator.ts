import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const IsSystemRequest = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const hasToken = request.headers['system-token'] != undefined;
        const token = request.headers['system-token'];
        return token == process.env.SYSTEM_TOKEN;
    },
);
