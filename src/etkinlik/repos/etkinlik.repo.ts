import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { CreateEtkinlikDto } from "../dto/create-etkinlik.dto";
import { Etkinlik } from "../entities/etkinlik.entity";


// does busness logic
@Injectable()
export class EtkinlikRepository {
    constructor(private readonly prismaService: PrismaService) {};
    
    async addEtkinlik(activities: CreateEtkinlikDto ) : Promise<Etkinlik>{
        let etkinlikEntity: Etkinlik = new Etkinlik();

        etkinlikEntity.title = activities.title;
        etkinlikEntity.description = activities.description;

        etkinlikEntity = await this.prismaService.activities.create({
            data: {
                ...etkinlikEntity
            }
        })  as Etkinlik;
        
        return etkinlikEntity;   
    }

  
    async delEtkinlik( id: number ) : Promise<Etkinlik>{
        let etkinlikEntity: Etkinlik = new Etkinlik();

        etkinlikEntity = await this.prismaService.activities.delete({
            where:{
                id: id,
            }
        }) as Etkinlik;

        return etkinlikEntity;  
    }
    
    async getEtkinlik( id: number ) : Promise<Etkinlik>{
        let etkinlikEntity: Etkinlik = new Etkinlik();
        

        
        etkinlikEntity = await this.prismaService.activities.findUnique({
            where:{
                id: id,
            }

        }) as Etkinlik;

        return etkinlikEntity;  
    }

    async updateEtkinlik( id: number,  activities: CreateEtkinlikDto ) : Promise<Etkinlik>{

        let etkinlikEntity: Etkinlik = new Etkinlik();

        etkinlikEntity = await this.prismaService.activities.update({
            where:{
                id: id
            },
            data:{
                description: activities.description,
                title: activities.title,
            }
        }) as Etkinlik;

        return etkinlikEntity;  
    }


}