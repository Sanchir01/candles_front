import type { CodegenConfig } from "@graphql-codegen/cli";
require("dotenv").config();

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.SERVER_GRAPHQL
    ? process.env.SERVER_GRAPHQL
    : "http://localhost:5000",
  documents: "src/shared/graphql/mySchemas/**/*.gql",
  generates: {
    "src/shared/graphql/gql/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      plugins: ["typescript", "typescript-operations"],
      config: {
        scalars: {
          DateTime: "string",
          Html: "string",
          PageNumber: "number",
          PageSize: "number",
          UInt: "number",
          Upload: "File",
          Url: "string",
          Uuid: "string",
        },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
