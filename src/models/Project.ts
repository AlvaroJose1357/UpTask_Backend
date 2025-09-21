import { Schema, Document, model } from "mongoose";

export type ProjectType = Document & {
  projectName: string;
  clientName: string;
  description: string;
};

const ProjectSchema: Schema<ProjectType> = new Schema({
  projectName: { type: String, required: true, trim: true },
  clientName: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
});

const Project = model<ProjectType>("Project", ProjectSchema);

export default Project;
