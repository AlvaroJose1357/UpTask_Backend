import Project from "@/models/Project";
import { ErrorLogger } from "@/utils/logger";
import type { Request, Response } from "express";
export class ProjectController {
  static getAllProjects = async (req: Request, res: Response) => {
    res.send("Obteniendo todos los proyectos");
  };
  static createProject = async (req: Request, res: Response) => {
    const project = new Project(req.body);
    try {
      await project.save();
      res.status(201).send("Project created successfully");
    } catch (error) {
      ErrorLogger("Error creating project", { error });
      res.status(500).send("Error creating project");
    }
  };
}
