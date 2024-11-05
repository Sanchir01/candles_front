import type { CodegenConfig } from '@graphql-codegen/cli'
require('dotenv').config()

const config: CodegenConfig = {
   overwrite: true,
   schema: process.env.NEXT_PUBLIC_SERVER_URL
      ? process.env.NEXT_PUBLIC_SERVER_URL
      : 'http://localhost:5000',
   documents: 'src/shared/graphql/mySchemas/**/*.gql',
   generates: {
      'src/shared/graphql/gql/': {
         preset: 'client'
      }
   },
   ignoreNoDocuments: true
}

export default config
