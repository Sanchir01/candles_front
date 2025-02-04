import type { CodegenConfig } from '@graphql-codegen/cli'
require('dotenv').config()

const config: CodegenConfig = {
	overwrite: true,
	schema:
		process.env.NODE_ENV === 'production'
			? (process.env.NEXT_PUBLIC_SERVER_URL as string)
			: 'http://localhost:5000',
	documents: 'src/shared/graphql/mySchemas/**/*.gql',
	generates: {
		'src/shared/graphql/gql/': {
			preset: 'client'
		}
	}
}

export default config
