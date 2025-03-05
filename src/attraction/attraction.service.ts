import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAttractionDto } from './dto/create-attraction';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attractions } from './attraction.entity';

@Injectable()
export class AttractionService {
    constructor(
        @InjectRepository(Attractions)
        private attractionRepository: Repository<Attractions>,
    ) {}
    async create(createAttracionDto: CreateAttractionDto) {
        const newAttraction = await this.attractionRepository.create(createAttracionDto);
        const toCreate = await this.attractionRepository.insert(newAttraction);
        
        return toCreate;
    }
    findAll() {
        return this.attractionRepository.find();
    }
    findOne(id: number) {
        return this.attractionRepository.findOneBy({id: id});
    }
    async update(id: number, updateAttractionDto: CreateAttractionDto) {
        let attraction = await this.attractionRepository.findOneBy({id: id });
        attraction = {
            ...attraction,
            ...updateAttractionDto,
            id: attraction?.id || 0, // Ensure id is not undefined
        }
        const toUpdate = await this.attractionRepository.save(attraction)

        return toUpdate;
    }
    async remove(id: number) {
        const toDelete = await this.attractionRepository.delete(id);
        if (toDelete.affected === 0) {
            throw new NotFoundException(`Attraction with ID ${id} not found`);
        }
        
        return { message: 'Deleted successfully' };
    }
}
