import { model , Schema , models , Types} from 'mongoose';

export interface IVote {
    author : Types.ObjectId ;
    actionId : Types.ObjectId ;
    voteType : "upvote" | "downvote" ;
    type : "question" | "answer" ;
}

export interface IVoteDoc extends IVote , Document {}
const VoteSchema = new Schema<IVote>({
    author : { type : Schema.Types.ObjectId , ref : 'User' , required: true },
    actionId : { type : Schema.Types.ObjectId , required: true },
    voteType : { type : String , enum : ['upvote' , 'downvote'] , required: true },
    type : { type : String , enum : ['question' , 'answer'] , required: true }
}, {timestamps: true})

// if the model is already created, use it. Otherwise create a new model
const Vote = models?.Vote || model<IVote>('Vote', VoteSchema);
export default Vote;
