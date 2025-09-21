import mongoose from "mongoose";
import { MONGO_URI } from "./Process";
import { ErrorLogger, InfoLogger } from "@/utils/logger";
import { exit } from "node:process";

let count = 2;
export const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI no está definida");
    }
    const { connection } = await mongoose.connect(MONGO_URI);
    const urlBase = `${connection.host}:${connection.port}/${connection.name}`;
    InfoLogger(`Conectado a la base de datos en: ${urlBase}`);
  } catch (error) {
    ErrorLogger(
      "Error al conectar a la base de datos",
      error instanceof Error ? error.message : String(error),
    );
    if (count > 0) {
      count--;
      InfoLogger(
        `Reintentando conexión a la base de datos... Intentos restantes: ${count}`,
      );
      setTimeout(connectDB, 5000); // Reintentar después de 5 segundos
    } else {
      ErrorLogger(
        "No se pudo conectar a la base de datos después de varios intentos. Saliendo del proceso.",
      );
      exit(1); // Salir del proceso si no se puede conectar después de varios intentos
    }
  }
};
