import { Schema, model, models } from "mongoose";

export interface IProduct {
  _id?: string;
  name: string;
  nameEn: string;
  slug: string;
  category: string;
  tag: string;
  tagColor: string;
  description: string;
  descriptionEn: string;
  price?: number;
  emoji: string;
  bg: string;
  inStock: boolean;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name:          { type: String, required: true },
    nameEn:        { type: String, default: "" },
    slug:          { type: String, required: true, unique: true },
    category:      { type: String, required: true },
    tag:           { type: String, default: "" },
    tagColor:      { type: String, default: "#1a6fc4" },
    description:   { type: String, default: "" },
    descriptionEn: { type: String, default: "" },
    price:         { type: Number },
    emoji:         { type: String, default: "📦" },
    bg:            { type: String, default: "linear-gradient(135deg,#e8f0fb,#d0e4f8)" },
    inStock:       { type: Boolean, default: true },
    featured:      { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const ProductModel = models.Product || model<IProduct>("Product", ProductSchema);
