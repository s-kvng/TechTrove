import { model , Schema , models, Types , Document } from 'mongoose';

export interface IAccount {
    userId : Types.ObjectId ;
    provider : string ;
    providerAccountId : string ;
    name : string ;
    profileImage : string ;
    password: string ;
}

export interface IAccountDoc extends IAccount , Document {}
export const AccountSchema = new Schema<IAccount>({
    userId : { type : Schema.Types.ObjectId , ref : 'User' , required: true },
    provider : { type : String , required: true },
    providerAccountId : { type : String , required: true },
    name : { type : String , required: true },
    profileImage : { type : String  },
    password: { type : String },
}, {timestamps: true})

// if the model is already created, use it. Otherwise create a new model
const Account = models?.Account || model<IAccount>('Account', AccountSchema);
export default Account;