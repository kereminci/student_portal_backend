import { PartialType } from '@nestjs/mapped-types';
import { CreateHaberDto } from './create-haber.dto';

export class UpdateHaberDto  {
    public title:string;
    public description:string;
}
