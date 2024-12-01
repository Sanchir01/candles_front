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
   nextPage: Scalars['Int']['output']
   prevPage: Scalars['Int']['output']
   totalCount: TotalCountResolvingResult
   totalPages: Scalars['Int']['output']
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

export type AllUserOrdersOk = {
   __typename?: 'AllUserOrdersOk'
   orders: Array<Orders>
}

export type AllUserOrdersResult =
   | AllUserOrdersOk
   | InternalErrorProblem
   | UnauthorizedProblem

export type AuthMutations = {
   __typename?: 'AuthMutations'
   deleteToken?: Maybe<DeleteTokensResult>
   login: LoginResult
   newTokens: NewTokensResult
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
   description: Scalars['String']['output']
   id: Scalars['Uuid']['output']
   images: Array<Scalars['String']['output']>
   price: Scalars['Int']['output']
   slug: Scalars['String']['output']
   title: Scalars['String']['output']
   updated_at: Scalars['DateTime']['output']
   version: Scalars['UInt']['output']
   weight: Scalars['Int']['output']
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
   categoryId?: InputMaybe<Scalars['Uuid']['input']>
   colorId?: InputMaybe<Scalars['Uuid']['input']>
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
   delete?: Maybe<DeleteCategoryResult>
   updateCategory: UpdateCategoryResult
}

export type CategoryMutationCreateCategoryArgs = {
   input?: InputMaybe<CreateCategoryInput>
}

export type CategoryMutationDeleteArgs = {
   input?: InputMaybe<DeleteCategoryInput>
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
   delete?: Maybe<DeleteColorResult>
   updateColor: UpdateColorResult
}

export type ColorMutationCreateColorArgs = {
   input: CreateColorInput
}

export type ColorMutationDeleteArgs = {
   input?: InputMaybe<DeleteColorInput>
}

export type ColorMutationUpdateColorArgs = {
   input: UpdateColorInput
}

export type ColorQuery = {
   __typename?: 'ColorQuery'
   allColor: AllColorResult
   colorById: ColorByIdResult
   colorBySlug: ColorBySlugResult
}

export type ColorQueryColorByIdArgs = {
   input: ColorByIdInput
}

export type ColorQueryColorBySlugArgs = {
   input: ColorBySlugInput
}

export type CreateCandleInput = {
   category_id: Scalars['Uuid']['input']
   color_id: Scalars['Uuid']['input']
   description: Scalars['String']['input']
   images: Array<Scalars['Upload']['input']>
   price: Scalars['Int']['input']
   title: Scalars['String']['input']
   weight: Scalars['Int']['input']
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

export type DeleteCategoryInput = {
   id: Scalars['Uuid']['input']
}

export type DeleteCategoryOk = {
   __typename?: 'DeleteCategoryOk'
   ok: Scalars['Uuid']['output']
}

export type DeleteCategoryResult =
   | DeleteCategoryOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type DeleteColorInput = {
   id: Scalars['Uuid']['input']
}

export type DeleteColorOk = {
   __typename?: 'DeleteColorOk'
   ok: Scalars['Uuid']['output']
}

export type DeleteColorResult =
   | DeleteColorOk
   | InternalErrorProblem
   | VersionMismatchProblem

export type DeleteTokensOk = {
   __typename?: 'DeleteTokensOk'
   ok: Scalars['String']['output']
}

export type DeleteTokensResult = DeleteTokensOk | InternalErrorProblem

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

export type NewTokensOk = {
   __typename?: 'NewTokensOk'
   token: Scalars['String']['output']
}

export type NewTokensResult = InternalErrorProblem | NewTokensOk

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
   allUserOrders: AllUserOrdersResult
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

export type UpdateColorInput = {
   title: Scalars['String']['input']
}

export type UpdateColorOk = {
   __typename?: 'UpdateColorOk'
   id: Scalars['Uuid']['output']
}

export type UpdateColorResult =
   | InternalErrorProblem
   | UpdateColorOk
   | VersionMismatchProblem

export type User = {
   __typename?: 'User'
   createdAt: Scalars['DateTime']['output']
   email: Scalars['String']['output']
   id: Scalars['Uuid']['output']
   password: Scalars['String']['output']
   phone: Scalars['String']['output']
   role: Role
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

export type NewTokenMutationVariables = Exact<{ [key: string]: never }>

export type NewTokenMutation = {
   __typename?: 'Mutation'
   auth: {
      __typename?: 'AuthMutations'
      newTokens:
         | { __typename: 'InternalErrorProblem'; message: string }
         | { __typename: 'NewTokensOk'; token: string }
   }
}

export type DeleteTokenMutationVariables = Exact<{ [key: string]: never }>

export type DeleteTokenMutation = {
   __typename?: 'Mutation'
   auth: {
      __typename?: 'AuthMutations'
      deleteToken?:
         | { __typename?: 'DeleteTokensOk'; ok: string }
         | { __typename?: 'InternalErrorProblem'; message: string }
         | null
   }
}

export type AllCandlesQueryVariables = Exact<{
   pageSize: Scalars['PageSize']['input']
   pageNumber: Scalars['PageNumber']['input']
   sort?: InputMaybe<CandlesSortEnum>
   filter?: InputMaybe<CandlesFilterInput>
}>

export type AllCandlesQuery = {
   __typename?: 'Query'
   candles?: {
      __typename?: 'CandlesQuery'
      allCandles:
         | {
              __typename: 'AllCandlesOk'
              nextPage: number
              prevPage: number
              totalCount:
                 | { __typename: 'InternalErrorProblem'; message: string }
                 | { __typename: 'TotalCountResolvingOk'; totalCount: any }
                 | { __typename: 'VersionMismatchProblem'; message: string }
              candles: Array<{
                 __typename?: 'Candles'
                 id: any
                 category_id: any
                 images: Array<string>
                 price: number
                 title: string
                 version: any
                 color_id: any
              }>
           }
         | { __typename: 'InternalErrorProblem'; message: string }
         | { __typename: 'VersionMismatchProblem'; message: string }
   } | null
}

export type AllCandlesTotalCountQueryVariables = Exact<{
   pageSize: Scalars['PageSize']['input']
   pageNumber: Scalars['PageNumber']['input']
   sort?: InputMaybe<CandlesSortEnum>
   filter?: InputMaybe<CandlesFilterInput>
}>

export type AllCandlesTotalCountQuery = {
   __typename?: 'Query'
   candles?: {
      __typename?: 'CandlesQuery'
      allCandles:
         | {
              __typename: 'AllCandlesOk'
              totalCount:
                 | { __typename: 'InternalErrorProblem'; message: string }
                 | { __typename: 'TotalCountResolvingOk'; totalCount: any }
                 | { __typename: 'VersionMismatchProblem'; message: string }
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
              candle: {
                 __typename?: 'Candles'
                 id: any
                 title: string
                 version: any
                 color_id: any
                 category_id: any
                 images: Array<string>
                 price: number
                 slug: string
                 description: string
                 weight: number
              }
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

export type CategoryByIdQueryVariables = Exact<{
   input: CategoryByIdInput
}>

export type CategoryByIdQuery = {
   __typename?: 'Query'
   category?: {
      __typename?: 'CategoryQuery'
      categoryById:
         | {
              __typename?: 'CategoryByIdOk'
              category?: {
                 __typename?: 'Category'
                 title: string
                 version: any
                 id: any
              } | null
           }
         | { __typename?: 'InternalErrorProblem'; message: string }
         | { __typename?: 'VersionMismatchProblem'; message: string }
   } | null
}

export type AddCategoryMutationVariables = Exact<{
   input?: InputMaybe<CreateCategoryInput>
}>

export type AddCategoryMutation = {
   __typename?: 'Mutation'
   category: {
      __typename?: 'CategoryMutation'
      createCategory:
         | { __typename: 'CategoryCreateOk'; id: any }
         | { __typename: 'InternalErrorProblem'; message: string }
         | { __typename: 'UnauthorizedProblem'; message: string }
         | { __typename: 'VersionMismatchProblem' }
   }
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

export type ColorByIdQueryVariables = Exact<{
   input: ColorByIdInput
}>

export type ColorByIdQuery = {
   __typename?: 'Query'
   color: {
      __typename?: 'ColorQuery'
      colorById:
         | {
              __typename?: 'ColorByIdOk'
              colors: {
                 __typename?: 'Color'
                 id: any
                 slug: string
                 title: string
                 version: any
              }
           }
         | { __typename?: 'InternalErrorProblem'; message: string }
         | { __typename?: 'VersionMismatchProblem'; message: string }
   }
}

export type AddToColorMutationVariables = Exact<{
   input: CreateColorInput
}>

export type AddToColorMutation = {
   __typename?: 'Mutation'
   color: {
      __typename?: 'ColorMutation'
      createColor:
         | { __typename: 'ColorCreateOk'; id: any }
         | { __typename: 'InternalErrorProblem'; message: string }
         | { __typename: 'UnauthorizedProblem'; message: string }
         | { __typename: 'VersionMismatchProblem'; message: string }
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
              orders: Array<{
                 __typename?: 'Orders'
                 id: any
                 status: string
                 total_amount: number
                 userId: any
                 version: any
              }>
           }
         | { __typename: 'InternalErrorProblem'; message: string }
         | { __typename: 'UnauthorizedProblem'; message: string }
   }
}

export type AllUserOrdersQueryVariables = Exact<{ [key: string]: never }>

export type AllUserOrdersQuery = {
   __typename?: 'Query'
   orders: {
      __typename?: 'OrderQuery'
      allUserOrders:
         | {
              __typename?: 'AllUserOrdersOk'
              orders: Array<{
                 __typename?: 'Orders'
                 id: any
                 status: string
                 total_amount: number
                 userId: any
                 version: any
              }>
           }
         | { __typename?: 'InternalErrorProblem'; message: string }
         | { __typename?: 'UnauthorizedProblem'; message: string }
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

export type UserByIdQueryVariables = Exact<{ [key: string]: never }>

export type UserByIdQuery = {
   __typename?: 'Query'
   user?: {
      __typename?: 'UserQuery'
      profile:
         | { __typename: 'InternalErrorProblem'; message: string }
         | {
              __typename: 'UserProfileOk'
              profile: { __typename?: 'User'; id: any; role: Role }
           }
         | { __typename: 'VersionMismatchProblem'; message: string }
   } | null
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
export const NewTokenDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'NewToken' },
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
                           name: { kind: 'Name', value: 'newTokens' },
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
                                          value: 'NewTokensOk'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'token'
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
} as unknown as DocumentNode<NewTokenMutation, NewTokenMutationVariables>
export const DeleteTokenDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'DeleteToken' },
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
                           name: { kind: 'Name', value: 'deleteToken' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
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
                                          value: 'DeleteTokensOk'
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
} as unknown as DocumentNode<DeleteTokenMutation, DeleteTokenMutationVariables>
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
                  name: { kind: 'Name', value: 'pageSize' }
               },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'PageSize' }
                  }
               }
            },
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pageNumber' }
               },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'PageNumber' }
                  }
               }
            },
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
            },
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' }
               },
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'CandlesFilterInput' }
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
                                 name: { kind: 'Name', value: 'pageSize' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'pageSize' }
                                 }
                              },
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'pageNumber' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'pageNumber' }
                                 }
                              },
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'sort' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'sort' }
                                 }
                              },
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'filter' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'filter' }
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
                                                value: 'totalCount'
                                             },
                                             selectionSet: {
                                                kind: 'SelectionSet',
                                                selections: [
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: '__typename'
                                                      }
                                                   },
                                                   {
                                                      kind: 'InlineFragment',
                                                      typeCondition: {
                                                         kind: 'NamedType',
                                                         name: {
                                                            kind: 'Name',
                                                            value: 'TotalCountResolvingOk'
                                                         }
                                                      },
                                                      selectionSet: {
                                                         kind: 'SelectionSet',
                                                         selections: [
                                                            {
                                                               kind: 'Field',
                                                               name: {
                                                                  kind: 'Name',
                                                                  value: 'totalCount'
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
                                          },
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
                                                   }
                                                ]
                                             }
                                          },
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'nextPage'
                                             }
                                          },
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'prevPage'
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
export const AllCandlesTotalCountDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'AllCandlesTotalCount' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pageSize' }
               },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'PageSize' }
                  }
               }
            },
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pageNumber' }
               },
               type: {
                  kind: 'NonNullType',
                  type: {
                     kind: 'NamedType',
                     name: { kind: 'Name', value: 'PageNumber' }
                  }
               }
            },
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
            },
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' }
               },
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'CandlesFilterInput' }
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
                                 name: { kind: 'Name', value: 'pageSize' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'pageSize' }
                                 }
                              },
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'pageNumber' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'pageNumber' }
                                 }
                              },
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'sort' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'sort' }
                                 }
                              },
                              {
                                 kind: 'Argument',
                                 name: { kind: 'Name', value: 'filter' },
                                 value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'filter' }
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
                                                value: 'totalCount'
                                             },
                                             selectionSet: {
                                                kind: 'SelectionSet',
                                                selections: [
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: '__typename'
                                                      }
                                                   },
                                                   {
                                                      kind: 'InlineFragment',
                                                      typeCondition: {
                                                         kind: 'NamedType',
                                                         name: {
                                                            kind: 'Name',
                                                            value: 'TotalCountResolvingOk'
                                                         }
                                                      },
                                                      selectionSet: {
                                                         kind: 'SelectionSet',
                                                         selections: [
                                                            {
                                                               kind: 'Field',
                                                               name: {
                                                                  kind: 'Name',
                                                                  value: 'totalCount'
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
                  }
               }
            ]
         }
      }
   ]
} as unknown as DocumentNode<
   AllCandlesTotalCountQuery,
   AllCandlesTotalCountQueryVariables
>
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
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'description'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'weight'
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
export const CategoryByIdDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'CategoryById' },
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
                     name: { kind: 'Name', value: 'CategoryByIdInput' }
                  }
               }
            }
         ],
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
                           name: { kind: 'Name', value: 'categoryById' },
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
                                          value: 'CategoryByIdOk'
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
                                                         value: 'id'
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
} as unknown as DocumentNode<CategoryByIdQuery, CategoryByIdQueryVariables>
export const AddCategoryDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'AddCategory' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
               },
               type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'CreateCategoryInput' }
               }
            }
         ],
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
                           name: { kind: 'Name', value: 'createCategory' },
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
                                          value: 'CategoryCreateOk'
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
} as unknown as DocumentNode<AddCategoryMutation, AddCategoryMutationVariables>
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
export const ColorByIdDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'ColorById' },
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
                     name: { kind: 'Name', value: 'ColorByIdInput' }
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
                           name: { kind: 'Name', value: 'colorById' },
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
                                 },
                                 {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                       kind: 'NamedType',
                                       name: {
                                          kind: 'Name',
                                          value: 'ColorByIdOk'
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
                                                         value: 'slug'
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
} as unknown as DocumentNode<ColorByIdQuery, ColorByIdQueryVariables>
export const AddToColorDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'AddToColor' },
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
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' }
                                 },
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
} as unknown as DocumentNode<AddToColorMutation, AddToColorMutationVariables>
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
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'status'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'total_amount'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'userId'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'version'
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
export const AllUserOrdersDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'AllUserOrders' },
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
                           name: { kind: 'Name', value: 'allUserOrders' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
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
                                          value: 'AllUserOrdersOk'
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
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'status'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'total_amount'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'userId'
                                                      }
                                                   },
                                                   {
                                                      kind: 'Field',
                                                      name: {
                                                         kind: 'Name',
                                                         value: 'version'
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
} as unknown as DocumentNode<AllUserOrdersQuery, AllUserOrdersQueryVariables>
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
export const UserByIdDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'UserById' },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'profile' },
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
                                          value: 'UserProfileOk'
                                       }
                                    },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          {
                                             kind: 'Field',
                                             name: {
                                                kind: 'Name',
                                                value: 'profile'
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
                                                         value: 'role'
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
} as unknown as DocumentNode<UserByIdQuery, UserByIdQueryVariables>
