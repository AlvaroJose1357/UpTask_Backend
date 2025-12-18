import type { Request, Response, NextFunction } from "express";
import Project, { IProject } from "@/models/Project";

// se extiende la interfaz Request para incluir la propiedad project
declare module "express" {
  interface Request {
    project?: IProject; // propiedad opcional para almacenar el proyecto, esto con el fin de tipar correctamente, ya que express no lo tiene por defecto, y arroja errores en las rutas
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
