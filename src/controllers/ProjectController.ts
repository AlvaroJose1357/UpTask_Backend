import Project from "@/models/Project";
import { ErrorLogger } from "@/utils/logger";
import type { Request, Response } from "express";
export class ProjectController {
  static createProject = async (req: Request, res: Response) => {
    const project = new Project(req.body);
    try {
      await project.save();
      res.status(201).send("Projecto creado correctamente");
    } catch (error) {
      ErrorLogger("Error creating project", { error });
      res.status(500).send("Error creando proyecto");
    }
  };
  static getAllProjects = async (req: Request, res: Response) => {
    try {
      const projects = await Project.find();
      res.status(200).json({ message: "Proyectos obtenidos", projects });
    } catch (error) {
      ErrorLogger("Error fetching projects", { error });
      res.status(500).send("Error obteniendo proyectos");
    }
  };
  static getProjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      if (!project) {
        const error = new Error("Proyecto no encontrado");
        res.status(404).json({ error: error.message });
        return;
      }
      res.status(200).json({ message: "Proyecto obtenido", project });
    } catch (error) {
      ErrorLogger("Error fetching project by ID", { error });
      res.status(500).send("Error obteniendo proyecto por ID");
    }
  };
  static updateProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const project = await Project.findByIdAndUpdate(id, req.body);
      if (!project) {
        const error = new Error("Proyecto no encontrado");
        res.status(404).json({ error: error.message });
        return;
      }
      await project.save();
      res.status(200).send("Proyecto actualizado correctamente");
    } catch (error) {
      ErrorLogger("Error updating project", { error });
      res.status(500).send("Error actualizando proyecto");
    }
  };
  static deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      if (!project) {
        const error = new Error("Proyecto no encontrado");
        res.status(404).json({ error: error.message });
        return;
      }
      await project.deleteOne();
      res.status(204).json("");
    } catch (error) {
      ErrorLogger("Error deleting project", { error });
      res.status(500).send("Error eliminando proyecto");
    }
  };
}
