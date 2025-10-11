import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "@/controllers/ProjectController";
import { handleInputErrors } from "@/middlewares/validation";

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

export default router;
