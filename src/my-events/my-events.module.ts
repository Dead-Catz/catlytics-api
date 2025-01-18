import { Module } from '@nestjs/common';
import { MyEventsService } from './my-events.service';
import { MyEventsController } from './my-events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyEvent } from './entities/my-event.entity';
import { ProjectsModule } from 'src/projects/projects.module';

@Module({
  imports: [TypeOrmModule.forFeature([MyEvent]), ProjectsModule],
  controllers: [MyEventsController],
  providers: [MyEventsService],
})
export class MyEventsModule { }
