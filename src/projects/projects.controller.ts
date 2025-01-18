import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { SystemGuard } from 'src/access/system.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('projects')
@UseGuards(SystemGuard)
@ApiBearerAuth('system-token')
export class ProjectsController {
    constructor(private readonly service: ProjectsService) { }
    @Get()
    async findAll() {
        return await this.service.findAll();
    }
    @Get('/tokens')
    async tokens() {
        return await this.service.viewInMemoryTokens();
    }
    @Get('/reload-tokens')
    async refreshTokens() {
        return await this.service.reloadInMemoryTokens();
    }
}
