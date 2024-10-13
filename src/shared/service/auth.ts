import {
   LoginDocument,
   RegistrationsDocument
} from '~/shared/graphql/gql/graphql'
import { gqlRequest } from '~/shared/service/index'
export type RegistrationsType = {
   phone: string
   password: string
   title: string
   email: string
}
export const authService = {
   async login({ email, password }: { email: string; password: string }) {
      return gqlRequest.request({
         document: LoginDocument,
         variables: {
            input: { email, password }
         }
      })
   },
   async registration({ phone, password, title, email }: RegistrationsType) {
      return gqlRequest.request({
         document: RegistrationsDocument,
         variables: {
            input: { phone: phone, password: password, title: title, email }
         }
      })
   }
}
