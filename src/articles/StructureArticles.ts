import mongoose, { Schema, Document } from 'mongoose';

interface Article extends Document {
    title: string;
    img: string;
    summary: string;
}

const ArticleSchema: Schema = new Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    summary: { type: String, required: true },
});

const ArticleModel = mongoose.model<Article>('Article', ArticleSchema);

export default ArticleModel;
