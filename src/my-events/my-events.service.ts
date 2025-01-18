import { Injectable } from '@nestjs/common';
import { CreateMyEventDto } from './dto/create-my-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MyEvent } from './entities/my-event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MyEventsService {
  constructor(
    @InjectRepository(MyEvent)
    private readonly repo: Repository<MyEvent>,
  ) {
  }
  async create(command: CreateMyEventDto): Promise<MyEvent> {
    return await this.repo.save({
      ...command,
    });
  }
}
