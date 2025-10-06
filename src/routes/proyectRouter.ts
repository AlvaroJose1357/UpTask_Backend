import { ProjectController } from "@/controllers/ProjectController";
import { Router } from "express";

const router: Router = Router();

router.get("/", ProjectController.getAllProjects);
router.post("/", ProjectController.createProject);

export default router;
