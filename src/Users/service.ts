import { Injectable, Res } from "@nestjs/common";
import { Users } from "./model";
import { Nedb, Collections } from "../db/nedb";
import { Responses, Response } from "src/Responses";


@Injectable()
export class UserService{


    constructor() {
 
     }
    
    async create(user: Users) {
        return await this.createUser(user)
    }

    private async createUser(user) {
        const record = await global.db.insert(Collections.USERS, user);
        return new Responses().get(Response.OK, Response.MESSAGE, record)
    }
}