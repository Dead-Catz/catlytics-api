import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class MonitoringMiddleware implements NestMiddleware {
    private logger = new Logger('Monitoring');
    use(req: Request, res: Response, next: NextFunction) {
        const start = Date.now(); // Capture the start time  
        res.on('finish', () => {
            const duration = Date.now() - start; // Calculate duration  
            if (req.path.indexOf('session') == -1 && req.path.indexOf('matches/status') == -1) {
                this.logger.log(
                    `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
                );
            }
        });

        next();
    }
}