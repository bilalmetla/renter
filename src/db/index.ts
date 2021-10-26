
import { Nedb } from "./nedb";

export class DB {
    private db: Nedb;

    constructor() {
        this.db = new Nedb();
    }
    async getConnection() {
        return this.db;
    }
}