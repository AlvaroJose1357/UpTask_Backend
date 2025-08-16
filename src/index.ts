import app from "./server";
import { PORT } from "./config/Process";
import { InfoLogger } from "./utils/logger";

app.listen(PORT, () => {
  InfoLogger(`🚀 Server running on port ${PORT}`);
  InfoLogger(`📚 API Documentation: http://localhost:${PORT}/docs`);
  InfoLogger(
    `✅ El servicio está listo para recibir peticiones en http://localhost:${PORT}`,
  );
});
