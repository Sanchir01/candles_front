import { gqlRequest } from '~/shared/service/index'
import {
   LoginDocument,
   RegistrationsDocument
} from '~/shared/graphql/gql/graphql'

export const authService = {
   async login(email: string) {
      return gqlRequest.request({
         document: LoginDocument,
         variables: {
            input: { email: email }
         }
      })
   },
   async registration(phone: string, role: string, title: string) {
      return gqlRequest.request({
         document: RegistrationsDocument,
         variables: {
            input: { phone: phone, role: role, title: title }
         }
      })
   }
}
