import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Archivos y directorios a ignorar
const ignores = [
  "node_modules/**",
  ".next/**",
  "out/**",
  "build/**",
  "dist/**",
  ".vercel/**",
  ".turbo/**",
  "**/*.tsbuildinfo",
  "next-env.d.ts",
  "eslint.config.mjs",
];

const eslintConfig = [
  // Configuración para ignorar archivos
  { ignores },

  // Configuración principal
  ...compat.config({
    extends: [
      "next/core-web-vitals", // Reglas específicas de Next.js
      "plugin:react/recommended", // Reglas recomendadas para React
      "plugin:react-hooks/recommended", // Reglas para hooks de React
      "plugin:import/recommended", // Reglas para importaciones
      "plugin:import/typescript", // Reglas para importaciones de TypeScript
      "plugin:@typescript-eslint/recommended", // Reglas recomendadas para TypeScript
      "plugin:prettier/recommended", // Integración con Prettier
    ],
    parser: "@typescript-eslint/parser", // Parser para TypeScript
    parserOptions: {
      ecmaVersion: 2022, // Versión de ECMAScript corregida
      sourceType: "module", // Usar módulos ES
      ecmaFeatures: {
        jsx: true, // Soporte para JSX
      },
      project: "./tsconfig.json", // Ruta al archivo tsconfig.json
    },
    settings: {
      react: {
        version: "detect", // Detectar la versión de React
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
    },
    rules: {
      semi: ["error", "always"], // Punto y coma obligatorio
      "prettier/prettier": "error", // Ejecutar Prettier como una regla de ESLint
      "react/react-in-jsx-scope": "off", // No requerir importar React en cada archivo
      "react/prop-types": "off", // Desactivar PropTypes (innecesario en TypeScript)
      "@typescript-eslint/explicit-module-boundary-types": "off", // No requerir tipos explícitos en módulos
      "@typescript-eslint/no-unused-vars": "warn", // Advertencia para variables no utilizadas
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Módulos nativos de Node.js
            "external", // Paquetes npm
            "internal", // Rutas absolutas (alias)
            "parent", // Rutas relativas que van hacia arriba (../)
            "sibling", // Rutas relativas en el mismo directorio (./)
            "index", // El archivo índice del directorio actual
            "object", // Importaciones de objetos
            "type", // Importaciones de tipos
          ],
          pathGroups: [
            // Dar prioridad a las importaciones de React
            { pattern: "react", group: "builtin", position: "before" },
            // Dar prioridad a las importaciones de Next.js
            { pattern: "next/**", group: "builtin", position: "before" },
            // Dar prioridad a las importaciones con alias @/
            { pattern: "@/**", group: "internal", position: "before" },
          ],
          pathGroupsExcludedImportTypes: ["react", "next"],
          "newlines-between": "always", // Nueva línea entre grupos de importaciones
          alphabetize: {
            order: "asc", // Ordenar alfabéticamente
            caseInsensitive: true, // Ignorar mayúsculas/minúsculas
          },
        },
      ],
    },
  }),
];

export default eslintConfig;
