/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Html: { input: any; output: any; }
  PageNumber: { input: any; output: any; }
  PageSize: { input: any; output: any; }
  UInt: { input: any; output: any; }
  Upload: { input: any; output: any; }
  Url: { input: any; output: any; }
  Uuid: { input: any; output: any; }
};

export type AllCandlesOk = {
  __typename?: 'AllCandlesOk';
  candles: Array<Candles>;
};

export type AllCategoryResult = AllCandlesOk | InternalErrorProblem | VersionMismatchProblem;

export type Candles = {
  __typename?: 'Candles';
  category_id: Scalars['Uuid']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Uuid']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  version: Scalars['UInt']['output'];
};

export type CandlesCreateOk = {
  __typename?: 'CandlesCreateOk';
  id: Scalars['Uuid']['output'];
};

export type CandlesMutation = {
  __typename?: 'CandlesMutation';
  createCandle: CandlesMutationResult;
};


export type CandlesMutationCreateCandleArgs = {
  input: CreateCandleInput;
};

export type CandlesMutationResult = CandlesCreateOk | InternalErrorProblem | VersionMismatchProblem;

export type CandlesQuery = {
  __typename?: 'CandlesQuery';
  allCandles: AllCategoryResult;
};

export type Category = VersionInterface & {
  __typename?: 'Category';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Uuid']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  version: Scalars['UInt']['output'];
};

export type CategoryCreateOk = {
  __typename?: 'CategoryCreateOk';
  id: Scalars['Uuid']['output'];
};

export type CategoryCreateResult = CategoryCreateOk | InternalErrorProblem | UnauthorizedProblem;

export type CategoryGetAllOk = {
  __typename?: 'CategoryGetAllOk';
  category: Array<Category>;
};

export type CategoryGetAllResult = CategoryGetAllOk | InternalErrorProblem;

export type CategoryMutation = {
  __typename?: 'CategoryMutation';
  createCategory: CategoryCreateResult;
};


export type CategoryMutationCreateCategoryArgs = {
  input?: InputMaybe<CreateCategoryInput>;
};

export type CategoryQuery = {
  __typename?: 'CategoryQuery';
  getAllCategory: CategoryGetAllResult;
};

export type CreateCandleInput = {
  category_id: Scalars['Uuid']['input'];
  title: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
};

export type InternalErrorProblem = ProblemInterface & {
  __typename?: 'InternalErrorProblem';
  message: Scalars['String']['output'];
};

export type InvalidSortRankProblem = ProblemInterface & {
  __typename?: 'InvalidSortRankProblem';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  candles: CandlesMutation;
  category: CategoryMutation;
};

export type ProblemInterface = {
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  candles?: Maybe<CandlesQuery>;
  category?: Maybe<CategoryQuery>;
};

export enum Role {
  Admin = 'ADMIN',
  Guest = 'GUEST',
  User = 'USER'
}

export type SortRankInput = {
  next?: Scalars['String']['input'];
  prev?: Scalars['String']['input'];
};

export type UnauthorizedProblem = ProblemInterface & {
  __typename?: 'UnauthorizedProblem';
  message: Scalars['String']['output'];
};

export type VersionInterface = {
  version: Scalars['UInt']['output'];
};

export type VersionMismatchProblem = ProblemInterface & {
  __typename?: 'VersionMismatchProblem';
  message: Scalars['String']['output'];
};

export type CategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryQuery = { __typename?: 'Query', category?: { __typename?: 'CategoryQuery', getAllCategory: { __typename?: 'CategoryGetAllOk', category: Array<{ __typename?: 'Category', id: any }> } | { __typename?: 'InternalErrorProblem', message: string } } | null };


export const CategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryGetAllOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalErrorProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CategoryQuery, CategoryQueryVariables>;