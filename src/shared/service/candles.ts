import { gqlRequest } from '~/shared/service/index'
import {
	AllCandlesDocument,
	CandleByIdDocument
} from '~/shared/graphql/gql/graphql'

export const candlesService = {
	async allCandles() {
		return gqlRequest.request(AllCandlesDocument)
	},
	async candleById(id: string) {
		return gqlRequest.request({
			document: CandleByIdDocument,
			variables: { input: { id: id } }
		})
	}
}
