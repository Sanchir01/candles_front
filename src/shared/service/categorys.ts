import { gqlRequest } from '~/shared/service/index'
import { AllCategoryDocument } from '~/shared/graphql/gql/graphql'
////////////////////
export const categorysService = {
	async allCategorys() {
		return gqlRequest.request(AllCategoryDocument)
	}
	// async candleById(id: string) {
	// 	return gqlRequest.request({
	// 		document: CandleByIdDocument,
	// 		variables: { input: { id: id } }
	// 	})
	// }
}
