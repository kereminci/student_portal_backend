import { PartialType } from '@nestjs/mapped-types';
import { CreateDuyuruDto } from './create-duyuru.dto';

export class UpdateDuyuruDto extends PartialType(CreateDuyuruDto) {}
