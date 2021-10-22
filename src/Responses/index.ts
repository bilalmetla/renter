


// export interface Response {
//     resultCode: number,
//     message: string
// }
export enum Response {
    OK = 2001,
    MESSAGE = 'Success',
    FAILED = 'Failed',
    ACTIVATION_FAILED = 404,

}

export class Responses  {
    
    constructor() {
    }

    get(resultCode: number, message: string, data?: any) {
        return {
            resultCode,
            message,
            data,
        }
    }
    
    
}