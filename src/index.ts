import app from "./server";
import { PORT } from "./config/Process";
import logger from "./utils/logger";

app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`);
  logger.info(`📚 API Documentation: http://localhost:${PORT}/docs`);
  logger.info(
    `✅ El servicio está listo para recibir peticiones en http://localhost:${PORT}`,
  );
});
