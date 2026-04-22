import { Schema, model, models } from "mongoose";

export interface IService {
  _id?: string;
  title: string;
  titleEn: string;
  slug: string;
  description: string;
  descriptionEn: string;
  emoji: string;
  bg: string;
  order: number;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    title:         { type: String, required: true },
    titleEn:       { type: String, default: "" },
    slug:          { type: String, required: true, unique: true },
    description:   { type: String, required: true },
    descriptionEn: { type: String, default: "" },
    emoji:         { type: String, default: "🔧" },
    bg:            { type: String, default: "linear-gradient(135deg,#e8f0fb,#d0e4f8)" },
    order:         { type: Number, default: 0 },
    active:        { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const ServiceModel = models.Service || model<IService>("Service", ServiceSchema);
