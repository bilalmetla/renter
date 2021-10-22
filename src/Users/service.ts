import { Injectable, Res } from "@nestjs/common";
import { Users } from "./model";
import { Nedb, Collections } from "../db/nedb";
import { Responses, Response } from "src/Responses";


@Injectable()
export class UserService{
    private db: Nedb;

    constructor() {
        this.db = new Nedb()
     }
    
    create(user: Users) {
        return this.createUser(user)
    }

    private async createUser(user) {
        const record = await this.db.insert(Collections.USERS, user);
        return new Responses().get(Response.OK, Response.MESSAGE, record)
    }
}