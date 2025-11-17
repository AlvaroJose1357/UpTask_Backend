import Project from "@/models/Project";
import Task from "@/models/Task";
import logger from "@/utils/logger";
import type { Request, Response } from "express";

export class TaskController {
  static async createTask(req: Request, res: Response) {
    const { projectId } = req.body;
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        res.status(404).json({ message: "Project not found" });
        return;
      }
      const taskData = new Task(req.body);
      taskData.project = project.id;
      project.tasks.push(taskData.id);
      await taskData.save();
      await project.save();
      logger.success("Task created successfully");
      res.status(201).json({ message: "Tarea creada exitosamente", taskData });
    } catch (error) {
      logger.error("Error creating task", { error });
      res.status(500).send("Error creando tarea");
    }
  }
  static getAllTasks(req: Request, res: Response) {
    try {
      // Logic to get all tasks
    } catch (error) {
      logger.error("Error getting all tasks", { error });
      res.status(500).send("Error obteniendo todas las tareas");
    }
  }
  static getTaskById(req: Request, res: Response) {
    try {
      // Logic to get a task by ID
    } catch (error) {
      logger.error("Error getting task by ID", { error });
      res.status(500).send("Error obteniendo tarea");
    }
  }
  static updateTask(req: Request, res: Response) {
    try {
      // Logic to update a task
    } catch (error) {
      logger.error("Error updating task", { error });
      res.status(500).send("Error actualizando tarea");
    }
  }
  static deleteTask(req: Request, res: Response) {
    try {
      // Logic to delete a task
    } catch (error) {
      logger.error("Error deleting task", { error });
      res.status(500).send("Error eliminando tarea");
    }
  }
}
