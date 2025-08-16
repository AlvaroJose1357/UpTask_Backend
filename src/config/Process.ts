// Forma de uso usando la nueva configuración de variables de entorno:
// process.loadEnvFile();
// los iguales serian por si no se encuentra la variable de entorno, entonces por defecto se asigna el valor que contenga el lado derecho del igual
// export const { PORT = 3000, POSTGRES_URL } = process.env;

// // Forma de uso antigua:
// import "dotenv/config";
// export const { PORT = 3000, FRONTEND_URL } = process.env;
// -------------------------------------------------------------------
// configuracion TOP
import { ErrorLogger } from "@/utils/logger";
import { z } from "zod";
process.loadEnvFile();
const envSchema = z.object({
  PORT: z.string().default("3000"),
  // Se define FRONTEND_URL como una URL válida, con un protocolo http o https y se establece por defecto a "http://localhost:3000", se usa z.url para validar que sea una URL correcta y en protocol se usa una expresion regular para validar que el protocolo sea http o https y asi evitar urls como :
  // ❌ mailto:test@example.com,
  // ❌ ftp://files.example.com
  // ❌ ws://socket.example.com
  // ❌ file:///path/to/file
  FRONTEND_URL: z
    .url({ protocol: /^https?$/ })
    .default("http://localhost:3000"),
  API_VERSION: z.string().default("v1"),
});

const { success, error, data } = envSchema.safeParse(process.env);

if (!success) {
  // Si la validación falla, se registra un error y se termina el proceso
  // Se usa z.prettifyError para formatear el error de validación en un formato legible
  // se podria usar z.treeifyError para un formato mas detallado y usado en el caso de que se necesite ver la estructura del error y se necesite acceder a los detalles de cada error
  ErrorLogger(" ❌ Error en las variables de entorno", z.prettifyError(error));
  process.exit(1); // Termina el proceso si hay un error en las variables de entorno
}

export const { PORT, FRONTEND_URL, API_VERSION } = data;
