
import { Nedb } from "./nedb";

export class DB {
    db: any;

    constructor() {
        this.db = new Nedb();
    }
}