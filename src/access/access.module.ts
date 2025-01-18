import { Module } from '@nestjs/common';
import { SystemGuard } from './system.guard';

@Module({
    providers: [SystemGuard],
    exports: [SystemGuard],
})
export class AccessModule { }
