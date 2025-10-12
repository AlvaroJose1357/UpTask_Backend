import { Schema, Document, model, Types } from "mongoose";

const taskStatus = {
  PENDING: "pending",
  ON_HOLD: "onHold",
  IN_PROGRESS: "inProgress",
  UNDER_REVIEW: "underReview",
  COMPLETED: "completed",
} as const;

export type TaskStatus = (typeof taskStatus)[keyof typeof taskStatus]; // lo que se hace es crear un tipo el cual solo puede tener los valores que estan en el objeto taskStatus, el keyof typeof taskStatus obtiene las claves del objeto taskStatus y el typeof taskStatus obtiene el tipo del objeto taskStatus

export interface ITask extends Document {
  name: string;
  description: string;
  project: Types.ObjectId;
  status: TaskStatus;
}

const TaskSchema: Schema<ITask> = new Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    project: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    status: {
      type: String,
      enum: Object.values(taskStatus), // se usa Object.values para obtener los valores del objeto taskStatus
      default: taskStatus.PENDING,
    },
  },
  { timestamps: true },
);

const Task = model<ITask>("Task", TaskSchema);

export default Task;
