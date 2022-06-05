import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { HaberEntity } from "../entities/haber.entity";
import { CreateHaberDto } from "../dto/create-haber.dto";



// does busness logic
@Injectable()
export class HaberRepository {
    constructor(private readonly prismaService: PrismaService) {};
    
    async addhaber( haber: CreateHaberDto ) : Promise<HaberEntity>{
        let haberEntity: HaberEntity = new HaberEntity();
        haberEntity.title=haber.title;
        haberEntity.description = haber.description;
        haberEntity = await this.prismaService.news.create({
            data : {
                ...haberEntity
            } 
        }) as HaberEntity;

        return haberEntity;  
    }

    async delhaber( id: number ) : Promise<HaberEntity>{
        let haberEntity: HaberEntity = new HaberEntity();

        haberEntity = await this.prismaService.news.delete({
            where:{
                id:id,
            }
        }) as HaberEntity;

        return haberEntity;  
    }

    async gethaber( id: number ) : Promise<HaberEntity>{
        let haberEntity: HaberEntity = new HaberEntity();
        haberEntity = await this.prismaService.news.findUnique({
            where:{
                id:id,
            }

        }) as HaberEntity;

        return haberEntity;  
    }

    async updatehaber( id: number, haber: CreateHaberDto ) : Promise<HaberEntity>{
        let haberEntity: HaberEntity = new HaberEntity();
        haberEntity = await this.prismaService.news.update({
            where:{
                id:id
            },
            data:{
                description:haber.description,
                title:haber.title,
            }
        }) as HaberEntity;

        return haberEntity;  
    }

    
    

  


}