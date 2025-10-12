import { Schema, Document, model, PopulatedDoc } from "mongoose";
import { ITask } from "./Task";

export interface IProject extends Document {
  projectName: string;
  clientName: string;
  description: string;
  tasks: PopulatedDoc<ITask & Document>[]; // Referencia a tareas, el populatedDoc permite tener los datos completos de los documentos referenciados, en este caso las tareas
}

const ProjectSchema: Schema<IProject> = new Schema(
  {
    projectName: { type: String, required: true, trim: true },
    clientName: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true },
);

const Project = model<IProject>("Project", ProjectSchema);

export default Project;
