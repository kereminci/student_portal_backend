import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';




// does busness logic
@Injectable()
export class HaberRepository {
    constructor(private readonly prismaService: PrismaService) {};
    
   
    

  


}