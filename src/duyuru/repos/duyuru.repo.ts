import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { DuyuruEntity } from "../entities/duyuru.entity";
import { CreateDuyuruDto } from "../dto/create-duyuru.dto";
import { UpdateDuyuruDto } from "../dto/update-duyuru.dto";






// does busness logic
@Injectable()
export class DuyuruRepository {
    constructor(private readonly prismaService: PrismaService) {};
    
    async addduyuru( duyuru: CreateDuyuruDto ) : Promise<DuyuruEntity>{
        let duyuruEntity: DuyuruEntity = new DuyuruEntity();

        duyuruEntity.title = duyuru.title;
        duyuruEntity.description = duyuru.description;
        

        duyuruEntity = await this.prismaService.announcements.create({
            data : {
                ...duyuruEntity
            } 
        }) as DuyuruEntity;

        return duyuruEntity;  
    }

    async delduyuru( id: number ) : Promise<DuyuruEntity>{
        let duyuruEntity: DuyuruEntity = new DuyuruEntity();

        duyuruEntity = await this.prismaService.announcements.delete({
            where:{
                id: id,
            }
        }) as DuyuruEntity;

        return duyuruEntity;  
    }
    
    async getduyuru( id: number ) : Promise<DuyuruEntity>{
        let duyuruEntity: DuyuruEntity = new DuyuruEntity();
        

        
        duyuruEntity = await this.prismaService.announcements.findUnique({
            where:{
                id: id,
            }

        }) as DuyuruEntity;

        return duyuruEntity;  
    }

    async updateduyuru( id: number,  duyuru: UpdateDuyuruDto ) : Promise<DuyuruEntity>{

        let duyuruEntity: DuyuruEntity = new DuyuruEntity();

        duyuruEntity = await this.prismaService.announcements.update({
            where:{
                id: id
            },
            data:{
                description: duyuru.description,
                title: duyuru.title,
            }
        }) as DuyuruEntity;

        return duyuruEntity;  
    }


  


}