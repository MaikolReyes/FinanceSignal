import mongoose, { Document, Schema } from "mongoose";

export interface IArticle extends Document {
  title: string;
  img: string;
  summary: string;
  category: string;
}

const ArticleSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    summary: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model<IArticle>("Article", ArticleSchema);
export default Article;
