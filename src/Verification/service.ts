import { Injectable } from "@nestjs/common";

import { Verifications, Activations } from "./model";
import { Nedb, Collections } from "../db/nedb";
import { Responses, Response } from "../Responses";


@Injectable()
export class VerificationsService  {
    private activation: Activations = new Activations();
    private db: Nedb;

    constructor() {
        this.db = new Nedb()
    }

    createVerification ({ mobileNumber }: Verifications) {
        return this.createActivation(mobileNumber)
    }

    verifyMobileNumber({ mobileNumber, otpCode }: Verifications) {
        return this.getVerification({ mobileNumber, otpCode })
    }

    private async createActivation(mobileNumber) { 
        
        this.activation.mobileNumber = mobileNumber;
        this.activation.smsCode = this.activationCode(6);
        let date = new Date();
        this.activation.createdDate = date;
        this.activation.expiry = new Date(date.setDate(date.getDate() + 1))
        
        //todo save this record
        await this.db.insert(Collections.ACTIVATIONS, this.activation);

        return new Responses().get(Response.OK, Response.MESSAGE);
    }

    private activationCode (length) {
        var text = "";
        var possible = "123456789";
        for (var i = 0; i < length; i++) {
          var sup = Math.floor(Math.random() * possible.length);
          text += i > 0 && sup == i ? "0" : possible.charAt(sup);
        }
        return Number(text);
    }
    
    private async getVerification({ mobileNumber, otpCode }) {
        let where = {
            $and: [
                { mobileNumber },
                { smsCode: otpCode },
            ]
        }
        const activation: Activations[] = await this.db.find(Collections.ACTIVATIONS, where)
        if (!activation || activation.length === 0) { 
            return new Responses().get(Response.ACTIVATION_FAILED, Response.FAILED);
        }
        let user = await this.db.findOne(Collections.USERS, { mobileNumber });
        return new Responses().get(Response.OK, Response.MESSAGE, user);
    }

}