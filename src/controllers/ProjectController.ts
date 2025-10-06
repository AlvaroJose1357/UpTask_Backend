import type { Request, Response } from "express";
export class ProjectController {
  static getAllProjects = async (req: Request, res: Response) => {
    res.send("Obteniendo todos los proyectos");
  };
  static createProject = async (req: Request, res: Response) => {
    res.send("Create a new project");
  };
}
