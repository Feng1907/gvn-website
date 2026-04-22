import mongoose, { Schema, model, models } from "mongoose";

export interface IProject {
  _id?: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  image: string;       // URL hoặc đường dẫn ảnh
  description?: string;
  descriptionEn?: string;
  featured: boolean;
  order: number;       // thứ tự hiển thị
  createdAt?: Date;
  updatedAt?: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title:          { type: String, required: true },
    titleEn:        { type: String, required: true },
    category:       { type: String, required: true },
    categoryEn:     { type: String, required: true },
    image:          { type: String, required: true },
    description:    { type: String, default: "" },
    descriptionEn:  { type: String, default: "" },
    featured:       { type: Boolean, default: false },
    order:          { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Dùng models cache để tránh lỗi "Cannot overwrite model" khi hot reload
export const Project = models.Project || model<IProject>("Project", ProjectSchema);