import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MyEventsService } from './my-events.service';
import { CreateMyEventDto } from './dto/create-my-event.dto';
import { ProjectGuard } from 'src/projects/guards/project.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('events')
export class MyEventsController {
  constructor(private readonly myEventsService: MyEventsService) { }

  @Post()
  @UseGuards(ProjectGuard)
  @ApiBearerAuth('project-token')
  @ApiBearerAuth('project-name')
  create(@Body() command: CreateMyEventDto) {
    return this.myEventsService.create(command);
  }
}
