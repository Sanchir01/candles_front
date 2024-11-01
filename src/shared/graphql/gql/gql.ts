/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
   'mutation Login($input: LoginInput!) {\n  auth {\n    login(input: $input) {\n      __typename\n      ... on LoginOk {\n        email\n        phone\n        role\n        title\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n    }\n  }\n}\n\nmutation Registrations($input: RegistrationsInput!) {\n  auth {\n    registrations(input: $input) {\n      __typename\n      ... on RegistrationsOk {\n        email\n        phone\n        role\n        title\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n    }\n  }\n}\n\nmutation NewToken {\n  auth {\n    newTokens {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on NewTokensOk {\n        token\n      }\n    }\n  }\n}':
      types.LoginDocument,
   'query AllCandles($sort: CandlesSortEnum) {\n  candles {\n    allCandles(sort: $sort) {\n      __typename\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on AllCandlesOk {\n        candles {\n          id\n          title\n          version\n          color_id\n          category_id\n          images\n          price\n          slug\n        }\n      }\n    }\n  }\n}\n\nquery CandleById($input: CandlesByIdInput!) {\n  candles {\n    candleById(input: $input) {\n      __typename\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on CandlesByIdOk {\n        candle {\n          id\n          title\n          version\n          color_id\n          category_id\n          images\n          price\n          slug\n        }\n      }\n    }\n  }\n}':
      types.AllCandlesDocument,
   'query allCategory {\n  category {\n    getAllCategory {\n      __typename\n      ... on CategoryGetAllOk {\n        category {\n          id\n          title\n          slug\n        }\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n    }\n  }\n}':
      types.AllCategoryDocument,
   'query AllColor {\n  color {\n    allColor {\n      __typename\n      ... on AllColorOk {\n        colors {\n          id\n          title\n          slug\n        }\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n    }\n  }\n}\n\nmutation CreateColor($input: CreateColorInput!) {\n  color {\n    createColor(input: $input) {\n      __typename\n      ... on ColorCreateOk {\n        id\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on UnauthorizedProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n    }\n  }\n}':
      types.AllColorDocument,
   'query AllOrders {\n  orders {\n    allOrders {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on UnauthorizedProblem {\n        message\n      }\n      ... on AllOrdersOk {\n        orders {\n          id\n        }\n      }\n    }\n  }\n}\n\nmutation Mutation($input: CreateOrderInput!) {\n  orders {\n    createOrder(input: $input) {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on UnauthorizedProblem {\n        message\n      }\n      ... on CreateOrderOk {\n        ok\n      }\n    }\n  }\n}':
      types.AllOrdersDocument,
   'query UserId {\n  user {\n    profile {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on UserProfileOk {\n        profile {\n          id\n          role\n        }\n      }\n    }\n  }\n}':
      types.UserIdDocument
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
   source: 'mutation Login($input: LoginInput!) {\n  auth {\n    login(input: $input) {\n      __typename\n      ... on LoginOk {\n        email\n        phone\n        role\n        title\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n    }\n  }\n}\n\nmutation Registrations($input: RegistrationsInput!) {\n  auth {\n    registrations(input: $input) {\n      __typename\n      ... on RegistrationsOk {\n        email\n        phone\n        role\n        title\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n    }\n  }\n}\n\nmutation NewToken {\n  auth {\n    newTokens {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on NewTokensOk {\n        token\n      }\n    }\n  }\n}'
): (typeof documents)['mutation Login($input: LoginInput!) {\n  auth {\n    login(input: $input) {\n      __typename\n      ... on LoginOk {\n        email\n        phone\n        role\n        title\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n    }\n  }\n}\n\nmutation Registrations($input: RegistrationsInput!) {\n  auth {\n    registrations(input: $input) {\n      __typename\n      ... on RegistrationsOk {\n        email\n        phone\n        role\n        title\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n    }\n  }\n}\n\nmutation NewToken {\n  auth {\n    newTokens {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on NewTokensOk {\n        token\n      }\n    }\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
   source: 'query AllCandles($sort: CandlesSortEnum) {\n  candles {\n    allCandles(sort: $sort) {\n      __typename\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on AllCandlesOk {\n        candles {\n          id\n          title\n          version\n          color_id\n          category_id\n          images\n          price\n          slug\n        }\n      }\n    }\n  }\n}\n\nquery CandleById($input: CandlesByIdInput!) {\n  candles {\n    candleById(input: $input) {\n      __typename\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on CandlesByIdOk {\n        candle {\n          id\n          title\n          version\n          color_id\n          category_id\n          images\n          price\n          slug\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query AllCandles($sort: CandlesSortEnum) {\n  candles {\n    allCandles(sort: $sort) {\n      __typename\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on AllCandlesOk {\n        candles {\n          id\n          title\n          version\n          color_id\n          category_id\n          images\n          price\n          slug\n        }\n      }\n    }\n  }\n}\n\nquery CandleById($input: CandlesByIdInput!) {\n  candles {\n    candleById(input: $input) {\n      __typename\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on CandlesByIdOk {\n        candle {\n          id\n          title\n          version\n          color_id\n          category_id\n          images\n          price\n          slug\n        }\n      }\n    }\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
   source: 'query allCategory {\n  category {\n    getAllCategory {\n      __typename\n      ... on CategoryGetAllOk {\n        category {\n          id\n          title\n          slug\n        }\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n    }\n  }\n}'
): (typeof documents)['query allCategory {\n  category {\n    getAllCategory {\n      __typename\n      ... on CategoryGetAllOk {\n        category {\n          id\n          title\n          slug\n        }\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n    }\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
   source: 'query AllColor {\n  color {\n    allColor {\n      __typename\n      ... on AllColorOk {\n        colors {\n          id\n          title\n          slug\n        }\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n    }\n  }\n}\n\nmutation CreateColor($input: CreateColorInput!) {\n  color {\n    createColor(input: $input) {\n      __typename\n      ... on ColorCreateOk {\n        id\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on UnauthorizedProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n    }\n  }\n}'
): (typeof documents)['query AllColor {\n  color {\n    allColor {\n      __typename\n      ... on AllColorOk {\n        colors {\n          id\n          title\n          slug\n        }\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n    }\n  }\n}\n\nmutation CreateColor($input: CreateColorInput!) {\n  color {\n    createColor(input: $input) {\n      __typename\n      ... on ColorCreateOk {\n        id\n      }\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on UnauthorizedProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n    }\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
   source: 'query AllOrders {\n  orders {\n    allOrders {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on UnauthorizedProblem {\n        message\n      }\n      ... on AllOrdersOk {\n        orders {\n          id\n        }\n      }\n    }\n  }\n}\n\nmutation Mutation($input: CreateOrderInput!) {\n  orders {\n    createOrder(input: $input) {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on UnauthorizedProblem {\n        message\n      }\n      ... on CreateOrderOk {\n        ok\n      }\n    }\n  }\n}'
): (typeof documents)['query AllOrders {\n  orders {\n    allOrders {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on UnauthorizedProblem {\n        message\n      }\n      ... on AllOrdersOk {\n        orders {\n          id\n        }\n      }\n    }\n  }\n}\n\nmutation Mutation($input: CreateOrderInput!) {\n  orders {\n    createOrder(input: $input) {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on UnauthorizedProblem {\n        message\n      }\n      ... on CreateOrderOk {\n        ok\n      }\n    }\n  }\n}']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
   source: 'query UserId {\n  user {\n    profile {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on UserProfileOk {\n        profile {\n          id\n          role\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query UserId {\n  user {\n    profile {\n      __typename\n      ... on InternalErrorProblem {\n        message\n      }\n      ... on VersionMismatchProblem {\n        message\n      }\n      ... on UserProfileOk {\n        profile {\n          id\n          role\n        }\n      }\n    }\n  }\n}']

export function gql(source: string) {
   return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
   TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
