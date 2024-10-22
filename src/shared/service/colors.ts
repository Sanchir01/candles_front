import { gqlRequest } from '~/shared/service/index'
import { AllColorDocument } from '~/shared/graphql/gql/graphql'

export const colorsService = {
	async allColors() {
		return gqlRequest.request(AllColorDocument)
	}
	// async candleById(id: string) {
	// 	return gqlRequest.request({
	// 		document: CandleByIdDocument,
	// 		variables: { input: { id: id } }
	// 	})
	// }
}
