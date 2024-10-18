/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
   [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
   [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
   [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
   T extends { [key: string]: unknown },
   K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
   | T
   | {
        [P in keyof T]?: P extends ' $fragmentName' | '__typename'
           ? T[P]
           : never
     }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
   ID: { input: string; output: string }
   String: { input: string; output: string }
   Boolean: { input: boolean; output: boolean }
   Int: { input: number; output: number }
   Float: { input: number; output: number }
   DateTime: { input: any; output: any }
   Html: { input: any; output: any }
   PageNumber: { input: any; output: any }
   PageSize: { input: any; output: any }
   UInt: { input: any; output: any }
   Upload: { input: any; output: any }
   Url: { input: any; output: any }
   Uuid: { input: any; output: any }
}

export type AllCandlesOk = {
   __typename?: 'AllCandlesOk'
   candles: Array<Candles>
   totalCount: TotalCountResolvingResult
}

export type AllCandlesOkTotalCountArgs = {
   estimate?: Scalars['UInt']['input']
}

export type AllCategoryResult =
   | AllCandlesOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type AllColorOk = {
   __typename?: 'AllColorOk'
   colors: Array<Color>
}

export type AllColorResult =
   | AllColorOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type AllOrdersOk = {
   __typename?: 'AllOrdersOk'
   orders: Array<Orders>
}

export type AllOrdersResult =
   | AllOrdersOk
   | InternalErrorProblem
   | UnauthorizedProblem

export type AuthMutations = {
   __typename?: 'AuthMutations'
   login: LoginResult
   registrations: RegistrationsResult
}

export type AuthMutationsLoginArgs = {
   input: LoginInput
}

export type AuthMutationsRegistrationsArgs = {
   input: RegistrationsInput
}

export type Candles = {
   __typename?: 'Candles'
   category_id: Scalars['Uuid']['output']
   color_id: Scalars['Uuid']['output']
   created_at: Scalars['DateTime']['output']
   id: Scalars['Uuid']['output']
   images: Array<Scalars['String']['output']>
   price: Scalars['Int']['output']
   slug: Scalars['String']['output']
   title: Scalars['String']['output']
   updated_at: Scalars['DateTime']['output']
   version: Scalars['UInt']['output']
}

export type CandlesByIdInput = {
   id: Scalars['Uuid']['input']
}

export type CandlesByIdOk = {
   __typename?: 'CandlesByIdOk'
   candle: Candles
}

export type CandlesByIdResult =
   | CandlesByIdOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type CandlesBySlugInput = {
   slug: Scalars['String']['input']
}

export type CandlesBySlugOk = {
   __typename?: 'CandlesBySlugOk'
   candle: Candles
}

export type CandlesBySlugResult =
   | CandlesBySlugOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type CandlesCreateOk = {
   __typename?: 'CandlesCreateOk'
   id: Scalars['Uuid']['output']
}

export type CandlesFilterInput = {
   categoryId?: InputMaybe<Array<Scalars['Uuid']['input']>>
   colorId?: InputMaybe<Array<Scalars['Uuid']['input']>>
}

export type CandlesMutation = {
   __typename?: 'CandlesMutation'
   createCandle: CandlesMutationResult
}

export type CandlesMutationCreateCandleArgs = {
   input: CreateCandleInput
}

export type CandlesMutationResult =
   | CandlesCreateOk
   | InternalErrorProblem
   | UnauthorizedProblem
   | VersionMismatchProblem

export type CandlesQuery = {
   __typename?: 'CandlesQuery'
   allCandles: AllCategoryResult
   candleById: CandlesByIdResult
   candleBySlug: CandlesBySlugResult
}

export type CandlesQueryAllCandlesArgs = {
   filter?: InputMaybe<CandlesFilterInput>
   pageNumber?: Scalars['PageNumber']['input']
   pageSize?: Scalars['PageSize']['input']
   sort?: InputMaybe<CandlesSortEnum>
}

export type CandlesQueryCandleByIdArgs = {
   input: CandlesByIdInput
}

export type CandlesQueryCandleBySlugArgs = {
   input: CandlesBySlugInput
}

export enum CandlesSortEnum {
   CreatedAtAsc = 'CREATED_AT_ASC',
   CreatedAtDesc = 'CREATED_AT_DESC',
   PriceAsc = 'PRICE_ASC',
   PriceDesc = 'PRICE_DESC',
   SortRankAsc = 'SORT_RANK_ASC',
   SortRankDesc = 'SORT_RANK_DESC'
}

export type Category = VersionInterface & {
   __typename?: 'Category'
   created_at: Scalars['DateTime']['output']
   id: Scalars['Uuid']['output']
   slug: Scalars['String']['output']
   title: Scalars['String']['output']
   updated_at: Scalars['DateTime']['output']
   version: Scalars['UInt']['output']
}

export type CategoryByIdInput = {
   id: Scalars['Uuid']['input']
}

export type CategoryByIdOk = {
   __typename?: 'CategoryByIdOk'
   category?: Maybe<Category>
}

export type CategoryByIdResult =
   | CategoryByIdOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type CategoryBySlugInput = {
   slug: Scalars['String']['input']
}

export type CategoryBySlugOk = {
   __typename?: 'CategoryBySlugOk'
   category?: Maybe<Category>
}

export type CategoryBySlugResult =
   | CategoryBySlugOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type CategoryCreateOk = {
   __typename?: 'CategoryCreateOk'
   id: Scalars['Uuid']['output']
}

export type CategoryCreateResult =
   | CategoryCreateOk
   | InternalErrorProblem
   | UnauthorizedProblem
   | VersionMismatchProblem

export type CategoryGetAllOk = {
   __typename?: 'CategoryGetAllOk'
   category: Array<Category>
}

export type CategoryGetAllResult = CategoryGetAllOk | InternalErrorProblem

export type CategoryMutation = {
   __typename?: 'CategoryMutation'
   createCategory: CategoryCreateResult
   updateCategory: UpdateCategoryResult
}

export type CategoryMutationCreateCategoryArgs = {
   input?: InputMaybe<CreateCategoryInput>
}

export type CategoryMutationUpdateCategoryArgs = {
   input: UpdateCategoryInput
}

export type CategoryQuery = {
   __typename?: 'CategoryQuery'
   categoryById: CategoryByIdResult
   categoryBySlug: CategoryBySlugResult
   getAllCategory: CategoryGetAllResult
}

export type CategoryQueryCategoryByIdArgs = {
   input: CategoryByIdInput
}

export type CategoryQueryCategoryBySlugArgs = {
   input: CategoryBySlugInput
}

export type Color = {
   __typename?: 'Color'
   created_at: Scalars['DateTime']['output']
   id: Scalars['Uuid']['output']
   slug: Scalars['String']['output']
   title: Scalars['String']['output']
   updated_at: Scalars['DateTime']['output']
   version: Scalars['UInt']['output']
}

export type ColorByIdInput = {
   id: Scalars['Uuid']['input']
}

export type ColorByIdOk = {
   __typename?: 'ColorByIdOk'
   colors: Color
}

export type ColorByIdResult =
   | ColorByIdOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type ColorBySlugInput = {
   slug: Scalars['String']['input']
}

export type ColorBySlugOk = {
   __typename?: 'ColorBySlugOk'
   colors: Color
}

export type ColorBySlugResult =
   | ColorBySlugOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type ColorCreateOk = {
   __typename?: 'ColorCreateOk'
   id: Scalars['Uuid']['output']
}

export type ColorCreateResult =
   | ColorCreateOk
   | InternalErrorProblem
   | UnauthorizedProblem
   | VersionMismatchProblem

export type ColorMutation = {
   __typename?: 'ColorMutation'
   createColor: ColorCreateResult
}

export type ColorMutationCreateColorArgs = {
   input: CreateColorInput
}

export type ColorQuery = {
   __typename?: 'ColorQuery'
   allColor: AllColorResult
   colorByManyId: ColorByIdResult
   colorBySlug: ColorBySlugResult
}

export type ColorQueryColorByManyIdArgs = {
   input: ColorByIdInput
}

export type ColorQueryColorBySlugArgs = {
   input: ColorBySlugInput
}

export type CreateCandleInput = {
   category_id: Scalars['Uuid']['input']
   color_id: Scalars['Uuid']['input']
   images: Array<Scalars['Upload']['input']>
   price: Scalars['Int']['input']
   title: Scalars['String']['input']
}

export type CreateCategoryInput = {
   title: Scalars['String']['input']
}

export type CreateColorInput = {
   title: Scalars['String']['input']
}

export type CreateOrderInput = {
   items?: InputMaybe<Array<CreateOrderItem>>
}

export type CreateOrderItem = {
   price: Scalars['Int']['input']
   productsId: Scalars['Uuid']['input']
   quantity: Scalars['Int']['input']
}

export type CreateOrderOk = {
   __typename?: 'CreateOrderOk'
   ok: Scalars['String']['output']
}

export type CreateOrderResult =
   | CreateOrderOk
   | InternalErrorProblem
   | UnauthorizedProblem

export type InternalErrorProblem = ProblemInterface & {
   __typename?: 'InternalErrorProblem'
   message: Scalars['String']['output']
}

export type InvalidSortRankProblem = ProblemInterface & {
   __typename?: 'InvalidSortRankProblem'
   message: Scalars['String']['output']
}

export type LoginInput = {
   email: Scalars['String']['input']
   password: Scalars['String']['input']
}

export type LoginOk = {
   __typename?: 'LoginOk'
   email: Scalars['String']['output']
   phone: Scalars['String']['output']
   role: Role
   title: Scalars['String']['output']
}

export type LoginResult =
   | InternalErrorProblem
   | LoginOk
   | VersionMismatchProblem

export type Mutation = {
   __typename?: 'Mutation'
   auth: AuthMutations
   candles: CandlesMutation
   category: CategoryMutation
   color: ColorMutation
   orders: OrderMutations
}

export type OrderItems = {
   __typename?: 'OrderItems'
   createdAt: Scalars['DateTime']['output']
   id: Scalars['Uuid']['output']
   orderId: Scalars['Uuid']['output']
   price: Scalars['Int']['output']
   product_id: Scalars['Uuid']['output']
   quantity: Scalars['Int']['output']
   status: Scalars['String']['output']
   updatedAt: Scalars['DateTime']['output']
   userId: Scalars['Uuid']['output']
   version: Scalars['UInt']['output']
}

export type OrderMutations = {
   __typename?: 'OrderMutations'
   createOrder: CreateOrderResult
}

export type OrderMutationsCreateOrderArgs = {
   input: CreateOrderInput
}

export type OrderQuery = {
   __typename?: 'OrderQuery'
   allOrders: AllOrdersResult
}

export type Orders = {
   __typename?: 'Orders'
   createdAt: Scalars['DateTime']['output']
   id: Scalars['Uuid']['output']
   status: Scalars['String']['output']
   total_amount: Scalars['Int']['output']
   updatedAt: Scalars['DateTime']['output']
   userId: Scalars['Uuid']['output']
   version: Scalars['UInt']['output']
}

export type ProblemInterface = {
   message: Scalars['String']['output']
}

export type Query = {
   __typename?: 'Query'
   candles?: Maybe<CandlesQuery>
   category?: Maybe<CategoryQuery>
   color: ColorQuery
   orders: OrderQuery
   user?: Maybe<UserQuery>
}

export type RegistrationsInput = {
   email: Scalars['String']['input']
   password: Scalars['String']['input']
   phone: Scalars['String']['input']
   title: Scalars['String']['input']
}

export type RegistrationsOk = {
   __typename?: 'RegistrationsOk'
   email: Scalars['String']['output']
   phone: Scalars['String']['output']
   role: Role
   title: Scalars['String']['output']
}

export type RegistrationsResult =
   | InternalErrorProblem
   | RegistrationsOk
   | VersionMismatchProblem

export enum Role {
   Admin = 'admin',
   Guest = 'guest',
   User = 'user'
}

export type SortRankInput = {
   next?: Scalars['String']['input']
   prev?: Scalars['String']['input']
}

export type TotalCountResolvingOk = {
   __typename?: 'TotalCountResolvingOk'
   totalCount: Scalars['UInt']['output']
}

export type TotalCountResolvingResult =
   | InternalErrorProblem
   | TotalCountResolvingOk
   | VersionMismatchProblem

export type UnauthorizedProblem = ProblemInterface & {
   __typename?: 'UnauthorizedProblem'
   message: Scalars['String']['output']
}

export type UpdateCategoryInput = {
   title: Scalars['String']['input']
}

export type UpdateCategoryOk = {
   __typename?: 'UpdateCategoryOk'
   id: Scalars['Uuid']['output']
}

export type UpdateCategoryResult =
   | InternalErrorProblem
   | UpdateCategoryOk
   | VersionMismatchProblem

export type User = {
   __typename?: 'User'
   createdAt: Scalars['DateTime']['output']
   email: Scalars['String']['output']
   id: Scalars['Uuid']['output']
   password: Scalars['String']['output']
   phone: Scalars['String']['output']
   role: Role
   slug: Scalars['String']['output']
   title: Scalars['String']['output']
   updatedAt: Scalars['DateTime']['output']
   version: Scalars['UInt']['output']
}

export type UserProfileOk = {
   __typename?: 'UserProfileOk'
   profile: User
}

export type UserProfileResult =
   | InternalErrorProblem
   | UserProfileOk
   | VersionMismatchProblem

export type UserQuery = {
   __typename?: 'UserQuery'
   profile: UserProfileResult
}

export type VersionInterface = {
   version: Scalars['UInt']['output']
}

export type VersionMismatchProblem = ProblemInterface & {
   __typename?: 'VersionMismatchProblem'
   message: Scalars['String']['output']
}

export type LoginMutationVariables = Exact<{
   input: LoginInput
}>

export type LoginMutation = {
   __typename?: 'Mutation'
   auth: {
      __typename?: 'AuthMutations'
      login:
         | { __typename: 'InternalErrorProblem'; message: string }
         | {
              __typename: 'LoginOk'
              email: string
              phone: string
              role: Role
              title: string
           }
         | { __typename: 'VersionMismatchProblem'; message: string }
   }
}

export type RegistrationsMutationVariables = Exact<{
   input: RegistrationsInput
}>

export type RegistrationsMutation = {
   __typename?: 'Mutation'
   auth: {
      __typename?: 'AuthMutations'
      registrations:
         | { __typename: 'InternalErrorProblem'; message: string }
         | {
              __typename: 'RegistrationsOk'
              email: string
              phone: string
              role: Role
              title: string
           }
         | { __typename: 'VersionMismatchProblem'; message: string }
   }
}

export type AllCandlesQueryVariables = Exact<{
   sort?: InputMaybe<CandlesSortEnum>
}>

export type AllCandlesQuery = {
   __typename?: 'Query'
   candles?: {
      __typename?: 'CandlesQuery'
      allCandles:
         | {
              __typename: 'AllCandlesOk'
              candles: Array<{
                 __typename?: 'Candles'
                 id: any
                 title: string
                 version: any
                 color_id: any
                 category_id: any
                 images: Array<string>
                 price: number
                 slug: string
              }>
           }
         | { __typename: 'InternalErrorProblem'; message: string }
         | { __typename: 'VersionMismatchProblem'; message: string }
   } | null
}

export type CandleByIdQueryVariables = Exact<{
   input: CandlesByIdInput
}>

export type CandleByIdQuery = {
   __typename?: 'Query'
   candles?: {
      __typename?: 'CandlesQuery'
      candleById:
         | {
              __typename: 'CandlesByIdOk'
              candle: { __typename?: 'Candles'; id: any; images: Array<string> }
           }
         | { __typename: 'InternalErrorProblem'; message: string }
         | { __typename: 'VersionMismatchProblem'; message: string }
   } | null
}

export type AllCategoryQueryVariables = Exact<{ [key: string]: never }>

export type AllCategoryQuery = {
   __typename?: 'Query'
   category?: {
      __typename?: 'CategoryQuery'
      getAllCategory:
         | {
              __typename: 'CategoryGetAllOk'
              category: Array<{
                 __typename?: 'Category'
                 id: any
                 title: string
                 slug: string
              }>
           }
         | { __typename: 'InternalErrorProblem'; message: string }
   } | null
}

export type AllColorQueryVariables = Exact<{ [key: string]: never }>

export type AllColorQuery = {
   __typename?: 'Query'
   color: {
      __typename?: 'ColorQuery'
      allColor:
         | {
              __typename: 'AllColorOk'
              colors: Array<{
                 __typename?: 'Color'
                 id: any
                 title: string
                 slug: string
              }>
           }
         | { __typename: 'InternalErrorProblem'; message: string }
         | { __typename: 'VersionMismatchProblem'; message: string }
   }
}

export type CreateColorMutationVariables = Exact<{
   input: CreateColorInput
}>

export type CreateColorMutation = {
   __typename?: 'Mutation'
   color: {
      __typename?: 'ColorMutation'
      createColor:
         | { __typename?: 'ColorCreateOk'; id: any }
         | { __typename?: 'InternalErrorProblem'; message: string }
         | { __typename?: 'UnauthorizedProblem'; message: string }
         | { __typename?: 'VersionMismatchProblem'; message: string }
   }
}

export type AllOrdersQueryVariables = Exact<{ [key: string]: never }>

export type AllOrdersQuery = {
   __typename?: 'Query'
   orders: {
      __typename?: 'OrderQuery'
      allOrders:
         | {
              __typename: 'AllOrdersOk'
              orders: Array<{ __typename?: 'Orders'; id: any }>
           }
         | { __typename: 'InternalErrorProblem'; message: string }
         | { __typename: 'UnauthorizedProblem'; message: string }
   }
}

export type MutationMutationVariables = Exact<{
   input: CreateOrderInput
}>

export type MutationMutation = {
   __typename?: 'Mutation'
   orders: {
      __typename?: 'OrderMutations'
      createOrder:
         | { __typename: 'CreateOrderOk'; ok: string }
         | { __typename: 'InternalErrorProblem'; message: string }
         | { __typename: 'UnauthorizedProblem'; message: string }
   }
}

export const LoginDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'Login' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
               },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'LoginInput' }
                  }
               }
            }
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'auth' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'login' },
                           arguments: [
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'input' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'input' }
                                 }
                              }
                           ],
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: { kind: 'Name', value: 'LoginOk' }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'email'
                                             }
                                          },
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'phone'
                                             }
                                          },
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'role'
                                             }
                                          },
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'title'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'InternalErrorProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'VersionMismatchProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const RegistrationsDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'Registrations' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
               },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'RegistrationsInput' }
                  }
               }
            }
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'auth' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'registrations' },
                           arguments: [
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'input' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'input' }
                                 }
                              }
                           ],
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'RegistrationsOk'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'email'
                                             }
                                          },
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'phone'
                                             }
                                          },
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'role'
                                             }
                                          },
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'title'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'InternalErrorProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'VersionMismatchProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
} as unknown as DocumentNode<
   RegistrationsMutation,
   RegistrationsMutationVariables
>
export const AllCandlesDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'AllCandles' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sort' }
               },
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'CandlesSortEnum' }
               }
            }
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'candles' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'allCandles' },
                           arguments: [
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'sort' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'sort' }
                                 }
                              }
                           ],
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'VersionMismatchProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'InternalErrorProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'AllCandlesOk'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'candles'
                                             },
                                             selectionSet: {
                                                kind: 'SelectionSet',
                                                selections: [
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'id'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'title'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'version'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'color_id'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'category_id'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'images'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'price'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'slug'
                                                      }
                                                   }
                                                ]
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
} as unknown as DocumentNode<AllCandlesQuery, AllCandlesQueryVariables>
export const CandleByIdDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'CandleById' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
               },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'CandlesByIdInput' }
                  }
               }
            }
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'candles' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'candleById' },
                           arguments: [
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'input' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'input' }
                                 }
                              }
                           ],
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'VersionMismatchProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'InternalErrorProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'CandlesByIdOk'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'candle'
                                             },
                                             selectionSet: {
                                                kind: 'SelectionSet',
                                                selections: [
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'id'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'images'
                                                      }
                                                   }
                                                ]
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
} as unknown as DocumentNode<CandleByIdQuery, CandleByIdQueryVariables>
export const AllCategoryDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'allCategory' },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'getAllCategory' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'CategoryGetAllOk'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'category'
                                             },
                                             selectionSet: {
                                                kind: 'SelectionSet',
                                                selections: [
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'id'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'title'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'slug'
                                                      }
                                                   }
                                                ]
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'InternalErrorProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
} as unknown as DocumentNode<AllCategoryQuery, AllCategoryQueryVariables>
export const AllColorDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'AllColor' },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'color' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'allColor' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'AllColorOk'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'colors'
                                             },
                                             selectionSet: {
                                                kind: 'SelectionSet',
                                                selections: [
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'id'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'title'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'slug'
                                                      }
                                                   }
                                                ]
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'VersionMismatchProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'InternalErrorProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
} as unknown as DocumentNode<AllColorQuery, AllColorQueryVariables>
export const CreateColorDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'CreateColor' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
               },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'CreateColorInput' }
                  }
               }
            }
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'color' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'createColor' },
                           arguments: [
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'input' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'input' }
                                 }
                              }
                           ],
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'ColorCreateOk'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: { kind: 'Name', value: 'id' }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'InternalErrorProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'UnauthorizedProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'VersionMismatchProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
} as unknown as DocumentNode<CreateColorMutation, CreateColorMutationVariables>
export const AllOrdersDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'AllOrders' },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'orders' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'allOrders' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'InternalErrorProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'UnauthorizedProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'AllOrdersOk'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'orders'
                                             },
                                             selectionSet: {
                                                kind: 'SelectionSet',
                                                selections: [
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'id'
                                                      }
                                                   }
                                                ]
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
} as unknown as DocumentNode<AllOrdersQuery, AllOrdersQueryVariables>
export const MutationDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'Mutation' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
               },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'CreateOrderInput' }
                  }
               }
            }
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'orders' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'createOrder' },
                           arguments: [
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'input' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'input' }
                                 }
                              }
                           ],
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'InternalErrorProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'UnauthorizedProblem'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'message'
                                             }
                                          }
                                       ]
                                    }
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'CreateOrderOk'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: { kind: 'Name', value: 'ok' }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>
