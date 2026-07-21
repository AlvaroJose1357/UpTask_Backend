import type { Request, Response } from "express";
import type { Types } from "mongoose";
import Task from "@/models/Task";
import logger from "@/utils/logger";

export class TaskController {
  static async createTask(req: Request, res: Response) {
    try {
      const taskData = new Task(req.body);
      taskData.project = req.project?._id as Types.ObjectId; // Asignar el ID del proyecto a la tarea
      req.project?.tasks.push(taskData._id);
      await Promise.allSettled([taskData.save(), req.project?.save()]);
      logger.success("Task created successfully");
      res.status(201).json({ message: "Tarea creada exitosamente", taskData });
    } catch (error) {
      logger.error("Error creating task", { error });
      res.status(500).send("Error creando tarea");
    }
  }
  static getAllTasks(_req: Request, res: Response) {
    try {
      // Logic to get all tasks
      res.status(200).json({ message: "Todas las tareas obtenidas" });
    } catch (error) {
      logger.error("Error getting all tasks", { error });
      res.status(500).send("Error obteniendo todas las tareas");
    }
  }
  static getTaskById(_req: Request, res: Response) {
    try {
      // Logic to get a task by ID
      res.status(200).json({ message: "Tarea obtenida por ID" });
    } catch (error) {
      logger.error("Error getting task by ID", { error });
      res.status(500).send("Error obteniendo tarea");
    }
  }
  static updateTask(_req: Request, res: Response) {
    try {
      // Logic to update a task
      res.status(200).json({ message: "Tarea actualizada correctamente" });
    } catch (error) {
      logger.error("Error updating task", { error });
      res.status(500).send("Error actualizando tarea");
    }
  }
  static deleteTask(_req: Request, res: Response) {
    try {
      // Logic to delete a task
      res.status(200).json({ message: "Tarea eliminada correctamente" });
    } catch (error) {
      logger.error("Error deleting task", { error });
      res.status(500).send("Error eliminando tarea");
    }
  }
}
