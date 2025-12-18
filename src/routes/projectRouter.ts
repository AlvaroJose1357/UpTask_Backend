import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "@/controllers/ProjectController";
import { handleInputErrors } from "@/middlewares/validation";
import { TaskController } from "@/controllers/TaskController";
import { validateProjectExists } from "@/middlewares/project";

const router: Router = Router();

router.post(
  "/",
  body("projectName")
    .notEmpty()
    .withMessage("El nombre del proyecto es obligatorio"),
  body("clientName")
    .notEmpty()
    .withMessage("El nombre del cliente es obligatorio"),
  body("description").notEmpty().withMessage("La descripción es obligatoria"),
  handleInputErrors,
  ProjectController.createProject,
);
router.get("/", ProjectController.getAllProjects);
router.get(
  "/:id",
  param("id").isMongoId().withMessage("ID de proyecto inválido"),
  handleInputErrors,
  ProjectController.getProjectById,
);
router.put(
  "/:id",
  param("id").isMongoId().withMessage("ID de proyecto inválido"),
  body("projectName")
    .notEmpty()
    .withMessage("El nombre del proyecto es obligatorio"),
  body("clientName")
    .notEmpty()
    .withMessage("El nombre del cliente es obligatorio"),
  body("description").notEmpty().withMessage("La descripción es obligatoria"),
  handleInputErrors,
  ProjectController.updateProject,
);
router.delete(
  "/:id",
  param("id").isMongoId().withMessage("ID de proyecto inválido"),
  handleInputErrors,
  ProjectController.deleteProject,
);

//  Routes for tasks

router.post(
  "/:projectId/tasks",
  param("projectId").isMongoId().withMessage("ID de proyecto inválido"),
  body("name").notEmpty().withMessage("El nombre de la tarea es obligatorio"),
  body("description").notEmpty().withMessage("La descripción es obligatoria"),
  handleInputErrors,
  validateProjectExists,
  TaskController.createTask,
);

export default router;
