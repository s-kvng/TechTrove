import {Schema , model , models , Types } from 'mongoose';

export interface IAnswer {
    author : Types.ObjectId;
    question : Types.ObjectId;
    content: string;
    upvotes: number;
    downvotes: number;
}

const AnswerSchema = new Schema({
    author : { type : Schema.Types.ObjectId , ref : 'User' , required: true },
    question : { type : Schema.Types.ObjectId , ref : 'Question' , required: true },
    content : { type : String , required: true },
    upvotes : { type : Number , default: 0 },
    downvotes : { type : Number , default: 0 },
}, {timestamps: true})

// if the model is already created, use it. Otherwise create a new model
const Answer = models?.Answer || model<IAnswer>('Answer', AnswerSchema);
export default Answer;