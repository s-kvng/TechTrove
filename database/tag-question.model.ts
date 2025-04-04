import { Schema , model, models, Types } from 'mongoose';

export interface ITagQuestion {
    tag: Types.ObjectId;
    question: Types.ObjectId;
}

const QuestionTagSchema = new Schema<ITagQuestion>({
    tag: { type: Schema.Types.ObjectId, ref: 'Tag', required: true },
    question: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
}, { timestamps: true });

// if the model is already created, use it. Otherwise create a new model
const QuestionTag = models?.QuestionTag || model<ITagQuestion>('QuestionTag', QuestionTagSchema);
export default QuestionTag;