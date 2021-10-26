
import * as NEDB from "nedb";

export enum Collections {
    USERS = 'users',
    ACTIVATIONS = 'activations',
    PRODUCTS = 'products',
}

export class Nedb {
    private db: any;
    private users: NEDB;
    private activations: NEDB;
    private products: NEDB;

    constructor() {

        this.users = new NEDB('./data/users.db')
        this.activations = new NEDB('./data/activations.db')
        this.products = new NEDB('./data/products.db')
        
        
        this.users.loadDatabase()
        this.activations.loadDatabase()
        this.products.loadDatabase()

        this.db = {}
        this.db[Collections.USERS] = this.users
        this.db[Collections.ACTIVATIONS] = this.activations
        this.db[Collections.PRODUCTS] = this.products
    }

    async insert(collection: string, records: any): Promise<any>{
        return new Promise((resolve, reject)=>{
            return this.db[collection].insert(records, (err: Error, docs:any) => err ? reject(err) : resolve(docs))
        })
    }
   
    async update(collection: string, records: any, where: any): Promise<any>{
        return new Promise((resolve, reject) => {
            return this.db[collection]
                .update(where, { $set: records }, {},
                    (err: Error, docs: any) => err ? reject(err) : resolve(docs))
        })
    }

    async find(collection: string, where: Object) :Promise<any> {
        try {
            console.log('db find method..')
        return new Promise((resolve, reject) => {
            try {
                
                return this.db[collection].find(where, (err, docs: any[]) => {
                    console.log('db find inside method..')
                    if (err) {
                        console.log(err)
                        return reject(err)
                    }
                    console.log('db response success')
                    return resolve(docs)
                })

            } catch (ex) {
                console.log(ex)
            throw ex
            }
            
        })
        } catch (ex) {
            console.log(ex)
            throw ex
        }
        
    }

    async findOne(collection: string, where: Object): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.db[collection].findOne(where, (err: Error, docs:any) => err ? reject(err) : resolve(docs))
        })
    }
}