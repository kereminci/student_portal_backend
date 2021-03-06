import { PartialType } from '@nestjs/mapped-types';
import { CreateEtkinlikDto } from './create-etkinlik.dto';

export class UpdateEtkinlikDto extends PartialType(CreateEtkinlikDto) {
    public title:string;
    public description:string;
}
