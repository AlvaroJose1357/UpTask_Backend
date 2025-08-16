import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { corsOptions } from "@/config/Cors";
import { RateLimit } from "@/utils/rateLimit";
import swaggerSpec, { swaggerUIOptions } from "@/config/Swagger";
import { API_VERSION } from "./config/Process";
import { WarningLogger } from "./utils/logger";

const app: Express = express();

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes JSON
app.use(RateLimit); // Middleware para limitar la tasa de solicitudes
app.use(helmet()); // Middleware para mejorar la seguridad de la aplicación
app.use(morgan("dev")); // Middleware para registrar las solicitudes HTTP
app.use(cors(corsOptions)); // Middleware para manejar CORS con opciones personalizadas

// ruta para probar
app.get("/", cors({ origin: true }), (req, res) => {
  res.send("Hello World!");
});

// Ruta de ejemplo para la API
app.get(`/api/${API_VERSION}`, (req, res) => {
  res.json({ message: "API con express y typescript" });
});
//? las rutas de la API deberían estar bajo el prefijo /api/{API_VERSION}/ -> el donde apuntan

// Ruta para la documentación de la API usando Swagger
app.use(
  "/docs",
  cors({ origin: true }), // Permitir CORS para la documentación
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUIOptions),
);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
  WarningLogger(`Ruta no encontrada: `, {
    method: req.method,
    url: req.url,
  });
});

export default app;
