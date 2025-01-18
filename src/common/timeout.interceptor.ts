import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common';
import { Observable, TimeoutError } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
    constructor(private readonly timeoutMS: number) { }
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                timeout(this.timeoutMS),  // Timeout after 15 seconds (15000 milliseconds)
                catchError(err => {
                    if (err instanceof TimeoutError) {
                        throw new RequestTimeoutException('Request timed out after 15 seconds');
                    }
                    throw err;
                }),
            );
    }
}
