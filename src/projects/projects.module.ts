import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectGuard } from './guards/project.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectsService, ProjectGuard],
  controllers: [ProjectsController],
  exports: [ProjectsService, ProjectGuard],
})
export class ProjectsModule { }
