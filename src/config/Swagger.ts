import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";
import { PORT } from "./Process";

// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: "API Documentation",
//       version: "1.0.0",
//       description: "API Documentation",
//     },
//     basePath: "/",
//   },
//   apis: ["./src/routes/*.ts"],
// };

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    tags: [
      {
        // Aqui puedes colocar el nombre de tu API
        name: "Aqui colocas el nombre de tu API",
        // Aqui puedes colocar la descripcion de tu API
        description: "Aqui colocas la descripcion de tu API",
      },
    ],
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API Documentation",
      // contact: {
      //   name: "Equipo técnico de Pick&Shop",
      //   email: "",
      // },
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api`,
        description: "Despliegue del servidor",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerUIOptions: SwaggerUiOptions = {
  // el customCss permite personalizar el estilo de la interfaz de Swagger UI
  // en este caso se cambia el logo de la parte superior izquierda, se puede usar cualquier URL de imagen
  // customCss: `
  //   .topbar-wrapper .link {
  //     content: url('https://cdn-icons-png.flaticon.com/512/1190/1190975.png');
  //     height: 80px;
  //     width: 80px;
  //   }
  // `,
  customSiteTitle: "Documentacion REST API Express y Typescript",
};

export default swaggerSpec;
