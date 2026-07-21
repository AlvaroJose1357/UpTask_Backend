import type { NextFunction, Request, Response } from "express";
import Project, { type IProject } from "@/models/Project";

// se extiende la interfaz Request para incluir la propiedad project
declare module "express" {
  interface Request {
    project?: IProject; // middleware `validateProjectExists` garantiza que esta propiedad existe antes de llegar al controller
  }
}

export async function validateProjectExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { projectId } = req.params;

    const project = await Project.findById(projectId);
    if (!project) {
      res.status(404).json({ message: "Project not found" });
      return;
    }
    req.project = project;
    next();
  } catch {
    res.status(500).json({ error: "Hubo un error al validar el proyecto" });
  }
}
