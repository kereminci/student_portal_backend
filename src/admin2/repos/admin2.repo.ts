import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { Admin2Entity } from "../entities/admin2.entity";
import { CreateAdmin2Dto } from "../dto/create-admin2.dto";




// does busness logic
@Injectable()
export class Admin2Repository {
    constructor(private readonly prismaService: PrismaService) {};
    
    async addadmin2( admin2: CreateAdmin2Dto ) : Promise<Admin2Entity>{
        let admin2Entity: Admin2Entity = new Admin2Entity();
        admin2Entity.name=admin2.name;
        admin2Entity.surname = admin2.surname;
        admin2Entity.username = admin2.username;
        admin2Entity.password = admin2.password;
        admin2Entity.department = admin2.department;
        admin2Entity.id=admin2.id;
        admin2Entity = await this.prismaService.admin.create({
            data : {
                ...admin2Entity
            } 
        }) as Admin2Entity;

        return admin2Entity;  
    }

    async deladmin2( admin2: CreateAdmin2Dto ) : Promise<Admin2Entity>{
        let admin2Entity: Admin2Entity = new Admin2Entity();
        admin2Entity.name=admin2.name;
        admin2Entity.surname = admin2.surname;
        admin2Entity.username = admin2.username;
        admin2Entity.password = admin2.password;
        admin2Entity.department = admin2.department;
        admin2Entity.id=admin2.id;
        admin2Entity = await this.prismaService.admin.delete({
            where:{
                id:admin2Entity.id,
            }
        }) as Admin2Entity;

        return admin2Entity;  
    }
    
    async readadmin2( admin2: CreateAdmin2Dto ) : Promise<Admin2Entity>{
        let admin2Entity: Admin2Entity = new Admin2Entity();
        admin2Entity.name=admin2.name;
        admin2Entity.surname = admin2.surname;
        admin2Entity.username = admin2.username;
        admin2Entity.password = admin2.password;
        admin2Entity.department = admin2.department;
        admin2Entity.id=admin2.id;
        admin2Entity = await this.prismaService.admin.findUnique({
            where:{
                id:admin2Entity.id,
            }

        }) as Admin2Entity;

        return admin2Entity;  
    }

    async updateadmin2( admin2: CreateAdmin2Dto ) : Promise<Admin2Entity>{
        let admin2Entity: Admin2Entity = new Admin2Entity();
        admin2Entity.name=admin2.name;
        admin2Entity.surname = admin2.surname;
        admin2Entity.username = admin2.username;
        admin2Entity.password = admin2.password;
        admin2Entity.department = admin2.department;
        admin2Entity.id=admin2.id;
        admin2Entity = await this.prismaService.admin.update({
            where:{
                id:admin2Entity.id
            },
            data:{
                username:admin2Entity.username,
                password:admin2Entity.password,
            }
        }) as Admin2Entity;

        return admin2Entity;  
    }


  


}