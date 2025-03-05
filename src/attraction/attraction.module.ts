import { Module } from '@nestjs/common';
import { AttractionController } from './attraction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttractionService } from './attraction.service';
import { Attractions } from './attraction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attractions])],
  controllers: [AttractionController],
  providers: [AttractionService]
})
export class AttractionModule {}
