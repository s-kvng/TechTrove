import { model , Schema , models , Types , Document } from 'mongoose';

export interface ICollection{
    author : Types.ObjectId ;
    questionId: Types.ObjectId ;
}

export interface ICollectionDoc extends ICollection , Document {}
const ColllectionSchema = new Schema<ICollection>({
    author : { type : Schema.Types.ObjectId , ref : 'User' , required: true },
    questionId : { type : Schema.Types.ObjectId , ref : 'Question' , required: true }
}, {timestamps: true})

// if the model is already created, use it. Otherwise create a new model
const Collection = models?.Collection || model<ICollection>('Collection', ColllectionSchema);
export default Collection;