import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { DuyuruEntity } from "../entities/duyuru.entity";
import { CreateDuyuruDto } from "../dto/create-duyuru.dto";




// does busness logic
@Injectable()
export class DuyuruRepository {
    constructor(private readonly prismaService: PrismaService) {};
    
    async addduyuru( duyuru: CreateDuyuruDto ) : Promise<DuyuruEntity>{
        let duyuruEntity: DuyuruEntity = new DuyuruEntity();
        duyuruEntity.title=duyuru.title;
        duyuruEntity.description = duyuru.description;
        duyuruEntity.id=duyuru.id;
        duyuruEntity = await this.prismaService.announcements.create({
            data : {
                ...duyuruEntity
            } 
        }) as DuyuruEntity;

        return duyuruEntity;  
    }

    async delduyuru( duyuru: CreateDuyuruDto ) : Promise<DuyuruEntity>{
        let duyuruEntity: DuyuruEntity = new DuyuruEntity();
        duyuruEntity.title=duyuru.title;
        duyuruEntity.description = duyuru.description;
        duyuruEntity.id=duyuru.id;
        duyuruEntity = await this.prismaService.announcements.delete({
            where:{
                id:duyuruEntity.id,
            }
        }) as DuyuruEntity;

        return duyuruEntity;  
    }
    
    async readduyuru( duyuru: CreateDuyuruDto ) : Promise<DuyuruEntity>{
        let duyuruEntity: DuyuruEntity = new DuyuruEntity();
        duyuruEntity.title=duyuru.title;
        duyuruEntity.description = duyuru.description;
        duyuruEntity.id=duyuru.id;
        duyuruEntity = await this.prismaService.announcements.findUnique({
            where:{
                id:duyuruEntity.id,
            }

        }) as DuyuruEntity;

        return duyuruEntity;  
    }

    async updateduyuru( duyuru: CreateDuyuruDto ) : Promise<DuyuruEntity>{
        let duyuruEntity: DuyuruEntity = new DuyuruEntity();
        duyuruEntity.title=duyuru.title;
        duyuruEntity.description = duyuru.description;
        duyuruEntity.id=duyuru.id;
        duyuruEntity = await this.prismaService.announcements.update({
            where:{
                id:duyuruEntity.id
            },
            data:{
                description:duyuruEntity.description,
                title:duyuruEntity.title,
            }
        }) as DuyuruEntity;

        return duyuruEntity;  
    }


  


}