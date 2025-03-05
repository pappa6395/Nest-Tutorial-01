import { PartialType } from '@nestjs/mapped-types';
import { CreateAttractionDto } from './create-attraction';

export class UpdateAttractionDto extends PartialType(CreateAttractionDto) {}