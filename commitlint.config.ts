import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [0],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
  },
  prompt: {
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: ",",
      useExclamationMark: true,
    },
    messages: {
      skip: "(opcional) presiona Enter para omitir",
      max: "maximo %d caracteres",
      min: "minimo %d caracteres",
      emptyWarning: "este campo no puede estar vacio",
      upperLimitWarning: "se supero el maximo permitido",
      lowerLimitWarning: "no alcanza el minimo requerido",
    },
    questions: {
      type: {
        description: "Selecciona el tipo de cambio:",
        enum: {
          feat: {
            description: "Nueva funcionalidad",
            title: "Features",
          },
          fix: {
            description: "Correccion de bug",
            title: "Bug Fixes",
          },
          docs: {
            description: "Cambios de documentacion",
            title: "Documentation",
          },
          style: {
            description: "Formato/estilo sin cambiar logica",
            title: "Styles",
          },
          refactor: {
            description: "Refactor sin nueva feature ni bugfix",
            title: "Refactor",
          },
          perf: {
            description: "Mejoras de rendimiento",
            title: "Performance",
          },
          test: {
            description: "Agregar o corregir tests",
            title: "Tests",
          },
          build: {
            description: "Cambios en build o dependencias",
            title: "Build",
          },
          ci: {
            description: "Cambios de integracion continua",
            title: "CI",
          },
          chore: {
            description: "Mantenimiento general",
            title: "Chores",
          },
          revert: {
            description: "Reversion de commit",
            title: "Reverts",
          },
        },
      },
      scope: {
        description: "Que alcance tiene este cambio? (ej: tasks, projects, auth)",
      },
      subject: {
        description: "Escribe un resumen corto en modo imperativo",
      },
      body: {
        description: "Describe el contexto o motivo del cambio",
      },
      isBreaking: {
        description: "Este cambio introduce breaking changes?",
      },
      breaking: {
        description: "Describe el breaking change",
      },
      isIssueAffected: {
        description: "Este cambio afecta algun issue abierto?",
      },
      issues: {
        description: "Referencia issues (ej: #123, closes #45)",
      },
    },
  },
};

export default config;
// Este archivo de configuración de commitlint se utiliza para validar los mensajes de los commits
/*¿Qué formatos acepta?
Con esta configuración, commitlint permitirá:

* feat(archivos): mensaje commit

* feat: mensaje commit

* feat(archivos): mensaje commit\n\ndescripcion

Es decir: acepta con o sin scope, y acepta cuerpo adicional (descripcion).*/
