import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Admin } from "../dto/admin";
import { AdminEntity } from "../entities/admin.entity";
import * as bcrypt from 'bcrypt';
import { CreateNewsDto } from "../dto/create-news.dto";
import { NewEntity } from "../entities/news.entity";


// does busness logic
@Injectable()
export class AdminRepository {
    constructor(private readonly prismaService: PrismaService) {};
    
    async saveAdmin(admin: Admin ) : Promise<AdminEntity>{
        let adminEntity: AdminEntity = new AdminEntity();

        adminEntity.username = admin.username;
        adminEntity.password = await bcrypt.hash(admin.password, 10);

        adminEntity = await this.prismaService.admin.create({
            data: {
                ...adminEntity
            }
        })  as AdminEntity;
        
        return adminEntity;   
    }
    
    async findOne(username: string ) : Promise<AdminEntity>{
        let adminEntity: AdminEntity = new AdminEntity();

        

        adminEntity = await this.prismaService.admin.findFirst({
            where: {
                "username": username
            }
        })  as AdminEntity;
        
        return adminEntity;   
    }

    async addNews( news: CreateNewsDto ) : Promise<NewEntity>{
        let newsEntity: NewEntity = new NewEntity();
        newsEntity.title = news.title;
        newsEntity.description = news.description;

        newsEntity = await this.prismaService.news.create({
            data : {
                ...newsEntity
            } 
        }) as NewEntity;

        return newsEntity;  
    }

  


}

// inversion of controll design pattern

