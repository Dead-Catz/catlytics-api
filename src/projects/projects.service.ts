import { Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceError } from 'src/common/service_error';

@Injectable()
export class ProjectsService {
    private inMemoryTokens: { [key: string]: string } = {};
    constructor(
        @InjectRepository(Project)
        private readonly repo: Repository<Project>,
    ) {
        this.reloadInMemoryTokens();
    }

    async findAll(): Promise<Project[]> {
        return await this.repo.findBy({});
    }
    async viewInMemoryTokens() {
        return this.inMemoryTokens;
    }
    async reloadInMemoryTokens(): Promise<boolean> {
        let projects = await this.findAll();
        this.inMemoryTokens = {};
        for (var i = 0; i < projects.length; i++) {
            this.inMemoryTokens[projects[i].name] = projects[i].accessToken;
        }
        return true;
    }
    async isValidProjectAccessToken(name: string, token: string): Promise<boolean> {
        let validToken = this.inMemoryTokens[name];
        if (validToken == undefined)
            throw new ServiceError(404, 'project not found');
        return token == validToken;
    }
}
