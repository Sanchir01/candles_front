import { gqlRequest } from '~/shared/api/api-instance'
import {
   LoginDocument,
   RegistrationsDocument
} from '~/shared/graphql/gql/graphql'

export type RegistrationsType = {
   phone: string
   password: string
   title: string
   email: string
}
export const authService = {
   loginKey: 'login',
   registerKey: 'register',
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
