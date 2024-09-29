import type { CodegenConfig } from '@graphql-codegen/cli'
require('dotenv').config()

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.SERVER_GRAPHQL
		? process.env.SERVER_GRAPHQL
		: 'http://localhost:5000',
	documents: 'src/shared/graphql/mySchemas/**/*.gql',
	generates: {
		'src/shared/graphql/gql/': {
			preset: 'client',
			plugins: []
		}
	}
}

export default config
