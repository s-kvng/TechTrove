import { model , Schema , models , Types} from 'mongoose';

export interface IInteraction{
    user : Types.ObjectId ;
    actionId: Types.ObjectId;
    actions: string;
    actionType: "question" | "answer";
}

const InteractionSchema = new Schema<IInteraction>({
    user : { type : Schema.Types.ObjectId , ref : 'User' , required: true },
    actionId : { type : Schema.Types.ObjectId , required: true },
    actions : { type : String , required: true },
    actionType: { type : String , enum : ['question' , 'answer'] , required: true }
}, {timestamps: true})

// if the model is already created, use it. Otherwise create a new model
const Interaction = models?.Interaction || model<IInteraction>('Interaction', InteractionSchema);
export default Interaction;
