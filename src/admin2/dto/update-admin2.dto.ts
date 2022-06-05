import { PartialType } from '@nestjs/mapped-types';
import { CreateAdmin2Dto } from './create-admin2.dto';

export class UpdateAdmin2Dto extends PartialType(CreateAdmin2Dto) {}
