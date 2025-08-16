import rateLimit from "express-rate-limit";

export const RateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por ventana
  message: {
    message: "Too many requests from this IP, please try again later.",
  },
  standardHeaders: true, // devuelve información de la tasa de límite en los encabezados `RateLimit-*`
  legacyHeaders: false, // desactiva los encabezados `X-RateLimit-*`
  // skipSuccessfulRequests: true, // no cuenta las solicitudes exitosas
});
