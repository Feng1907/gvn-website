import { Schema, model, models } from "mongoose";

export interface ProductSpec {
  label: string;
  labelEn: string;
  value: string;
  valueEn: string;
}

export interface IProduct {
  _id?: string;
  name: string;
  nameEn: string;
  slug: string;
  category: string;
  catSlug: string;
  tag: string;
  tagColor: string;
  description: string;
  descriptionEn: string;
  images: string[];
  imageFallbacks: string[];
  specs: ProductSpec[];
  features: string[];
  featuresEn: string[];
  relatedSlugs: string[];
  price?: number;
  emoji: string;
  bg: string;
  inStock: boolean;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSpecSchema = new Schema<ProductSpec>(
  {
    label:   { type: String, default: "" },
    labelEn: { type: String, default: "" },
    value:   { type: String, default: "" },
    valueEn: { type: String, default: "" },
  },
  { _id: false }
);

const ProductSchema = new Schema<IProduct>(
  {
    name:           { type: String, required: true },
    nameEn:         { type: String, default: "" },
    slug:           { type: String, required: true, unique: true },
    category:       { type: String, required: true },
    catSlug:        { type: String, default: "" },
    tag:            { type: String, default: "" },
    tagColor:       { type: String, default: "#1a6fc4" },
    description:    { type: String, default: "" },
    descriptionEn:  { type: String, default: "" },
    images:         { type: [String], default: [] },
    imageFallbacks: { type: [String], default: [] },
    specs:          { type: [ProductSpecSchema], default: [] },
    features:       { type: [String], default: [] },
    featuresEn:     { type: [String], default: [] },
    relatedSlugs:   { type: [String], default: [] },
    price:          { type: Number },
    emoji:          { type: String, default: "📦" },
    bg:             { type: String, default: "linear-gradient(135deg,#e8f0fb,#d0e4f8)" },
    inStock:        { type: Boolean, default: true },
    featured:       { type: Boolean, default: false },
  },
  { timestamps: true }
);

ProductSchema.index({ slug: 1 }, { unique: true });
ProductSchema.index({ category: 1 });
ProductSchema.index({ catSlug: 1 });
ProductSchema.index({ featured: 1 });

export const ProductModel = models.Product || model<IProduct>("Product", ProductSchema);
