import { Schema, model, models } from "mongoose";

export interface IArticle {
  _id?: string;
  title: string;
  titleEn: string;
  slug: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  category: string;
  categoryEn: string;
  emoji: string;
  bg: string;
  readTime: number;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ArticleSchema = new Schema<IArticle>(
  {
    title:       { type: String, required: true },
    titleEn:     { type: String, default: "" },
    slug:        { type: String, required: true, unique: true },
    excerpt:     { type: String, required: true },
    excerptEn:   { type: String, default: "" },
    content:     { type: String, default: "" },
    contentEn:   { type: String, default: "" },
    category:    { type: String, default: "Tin tức" },
    categoryEn:  { type: String, default: "News" },
    emoji:       { type: String, default: "📰" },
    bg:          { type: String, default: "linear-gradient(135deg,#e8f0fb,#d0e4f8)" },
    readTime:    { type: Number, default: 3 },
    published:   { type: Boolean, default: false },
  },
  { timestamps: true }
);

ArticleSchema.index({ slug: 1 }, { unique: true });
ArticleSchema.index({ category: 1 });
ArticleSchema.index({ published: 1 });
ArticleSchema.index({ createdAt: -1 });

export const ArticleModel = models.Article || model<IArticle>("Article", ArticleSchema);
