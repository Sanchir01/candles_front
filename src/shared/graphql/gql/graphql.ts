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

export type AllColorOk = {
  __typename?: 'AllColorOk';
  colors: Array<Color>;
};

export type AllColorResult = AllColorOk | InternalErrorProblem | VersionMismatchProblem;

export type AuthMutations = {
  __typename?: 'AuthMutations';
  login: LoginResult;
  registrations: RegistrationsResult;
};


export type AuthMutationsLoginArgs = {
  input: LoginInput;
};


export type AuthMutationsRegistrationsArgs = {
  input: RegistrationsInput;
};

export type Candles = {
  __typename?: 'Candles';
  category_id: Scalars['Uuid']['output'];
  color_id: Scalars['Uuid']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Uuid']['output'];
  images: Array<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
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

export type CandlesMutationResult = CandlesCreateOk | InternalErrorProblem | UnauthorizedProblem | VersionMismatchProblem;

export type CandlesQuery = {
  __typename?: 'CandlesQuery';
  allCandles: AllCategoryResult;
};

export type Category = VersionInterface & {
  __typename?: 'Category';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Uuid']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  version: Scalars['UInt']['output'];
};

export type CategoryCreateOk = {
  __typename?: 'CategoryCreateOk';
  id: Scalars['Uuid']['output'];
};

export type CategoryCreateResult = CategoryCreateOk | InternalErrorProblem | UnauthorizedProblem | VersionMismatchProblem;

export type CategoryGetAllOk = {
  __typename?: 'CategoryGetAllOk';
  category: Array<Category>;
};

export type CategoryGetAllResult = CategoryGetAllOk | InternalErrorProblem;

export type CategoryMutation = {
  __typename?: 'CategoryMutation';
  createCategory: CategoryCreateResult;
  updateCategory: UpdateCategoryResult;
};


export type CategoryMutationCreateCategoryArgs = {
  input?: InputMaybe<CreateCategoryInput>;
};


export type CategoryMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};

export type CategoryQuery = {
  __typename?: 'CategoryQuery';
  getAllCategory: CategoryGetAllResult;
};

export type Color = {
  __typename?: 'Color';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Uuid']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  version: Scalars['UInt']['output'];
};

export type ColorCreateOk = {
  __typename?: 'ColorCreateOk';
  id: Scalars['Uuid']['output'];
};

export type ColorCreateResult = ColorCreateOk | InternalErrorProblem | UnauthorizedProblem | VersionMismatchProblem;

export type ColorMutation = {
  __typename?: 'ColorMutation';
  createColor: ColorCreateResult;
};


export type ColorMutationCreateColorArgs = {
  input: CreateColorInput;
};

export type ColorQuery = {
  __typename?: 'ColorQuery';
  allColor: AllColorResult;
};

export type CreateCandleInput = {
  category_id: Scalars['Uuid']['input'];
  color_id: Scalars['Uuid']['input'];
  images: Array<Scalars['Upload']['input']>;
  price: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  title: Scalars['String']['input'];
};

export type CreateColorInput = {
  title: Scalars['String']['input'];
};

export type InternalErrorProblem = ProblemInterface & {
  __typename?: 'InternalErrorProblem';
  message: Scalars['String']['output'];
};

export type InvalidSortRankProblem = ProblemInterface & {
  __typename?: 'InvalidSortRankProblem';
  message: Scalars['String']['output'];
};

export type LoginInput = {
  phone: Scalars['String']['input'];
};

export type LoginOk = {
  __typename?: 'LoginOk';
  id: Scalars['Uuid']['output'];
  phone: Scalars['String']['output'];
  role: Role;
  verify_code: Scalars['String']['output'];
};

export type LoginResult = InternalErrorProblem | LoginOk | VersionMismatchProblem;

export type Mutation = {
  __typename?: 'Mutation';
  auth: AuthMutations;
  candles: CandlesMutation;
  category: CategoryMutation;
  color: ColorMutation;
};

export type ProblemInterface = {
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  candles?: Maybe<CandlesQuery>;
  category?: Maybe<CategoryQuery>;
  color: ColorQuery;
  user?: Maybe<UserQuery>;
};

export type RegistrationsInput = {
  phone: Scalars['String']['input'];
  role: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type RegistrationsOk = {
  __typename?: 'RegistrationsOk';
  id: Scalars['Uuid']['output'];
  phone: Scalars['String']['output'];
  role: Role;
  verify_code: Scalars['String']['output'];
};

export type RegistrationsResult = InternalErrorProblem | RegistrationsOk | VersionMismatchProblem;

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

export type UpdateCategoryInput = {
  title: Scalars['String']['input'];
};

export type UpdateCategoryOk = {
  __typename?: 'UpdateCategoryOk';
  id: Scalars['Uuid']['output'];
};

export type UpdateCategoryResult = InternalErrorProblem | UpdateCategoryOk | VersionMismatchProblem;

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Uuid']['output'];
  phone: Scalars['String']['output'];
  role: Role;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['UInt']['output'];
};

export type UserProfileOk = {
  __typename?: 'UserProfileOk';
  profile: User;
};

export type UserProfileResult = InternalErrorProblem | UserProfileOk | VersionMismatchProblem;

export type UserQuery = {
  __typename?: 'UserQuery';
  profile: UserProfileResult;
};


export type UserQueryProfileArgs = {
  id: Scalars['Uuid']['input'];
};

export type VersionInterface = {
  version: Scalars['UInt']['output'];
};

export type VersionMismatchProblem = ProblemInterface & {
  __typename?: 'VersionMismatchProblem';
  message: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', auth: { __typename?: 'AuthMutations', login: { __typename: 'InternalErrorProblem', message: string } | { __typename: 'LoginOk', id: any, phone: string, role: Role, verify_code: string } | { __typename: 'VersionMismatchProblem', message: string } } };

export type RegistrationsMutationVariables = Exact<{
  input: RegistrationsInput;
}>;


export type RegistrationsMutation = { __typename?: 'Mutation', auth: { __typename?: 'AuthMutations', registrations: { __typename: 'InternalErrorProblem', message: string } | { __typename: 'RegistrationsOk', id: any, verify_code: string, phone: string } | { __typename: 'VersionMismatchProblem', message: string } } };

export type AllCandlesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCandlesQuery = { __typename?: 'Query', candles?: { __typename?: 'CandlesQuery', allCandles: { __typename: 'AllCandlesOk', candles: Array<{ __typename?: 'Candles', id: any, images: Array<string>, slug: string, title: string, version: any, category_id: any }> } | { __typename: 'InternalErrorProblem', message: string } | { __typename: 'VersionMismatchProblem', message: string } } | null };

export type CreateCandleMutationVariables = Exact<{
  input: CreateCandleInput;
}>;


export type CreateCandleMutation = { __typename?: 'Mutation', candles: { __typename?: 'CandlesMutation', createCandle: { __typename?: 'CandlesCreateOk', id: any } | { __typename?: 'InternalErrorProblem', message: string } | { __typename?: 'UnauthorizedProblem', message: string } | { __typename?: 'VersionMismatchProblem', message: string } } };

export type AllCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoryQuery = { __typename?: 'Query', category?: { __typename?: 'CategoryQuery', getAllCategory: { __typename: 'CategoryGetAllOk', category: Array<{ __typename?: 'Category', id: any, title: string, slug: string }> } | { __typename: 'InternalErrorProblem', message: string } } | null };

export type AllColorQueryVariables = Exact<{ [key: string]: never; }>;


export type AllColorQuery = { __typename?: 'Query', color: { __typename?: 'ColorQuery', allColor: { __typename: 'AllColorOk', colors: Array<{ __typename?: 'Color', id: any, title: string, slug: string }> } | { __typename: 'InternalErrorProblem', message: string } | { __typename: 'VersionMismatchProblem', message: string } } };

export type CreateColorMutationVariables = Exact<{
  input: CreateColorInput;
}>;


export type CreateColorMutation = { __typename?: 'Mutation', color: { __typename?: 'ColorMutation', createColor: { __typename?: 'ColorCreateOk', id: any } | { __typename?: 'InternalErrorProblem', message: string } | { __typename?: 'UnauthorizedProblem', message: string } | { __typename?: 'VersionMismatchProblem', message: string } } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LoginOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"verify_code"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalErrorProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VersionMismatchProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegistrationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Registrations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrationsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registrations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RegistrationsOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"verify_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalErrorProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VersionMismatchProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RegistrationsMutation, RegistrationsMutationVariables>;
export const AllCandlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allCandles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"candles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCandles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AllCandlesOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"candles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"category_id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VersionMismatchProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalErrorProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllCandlesQuery, AllCandlesQueryVariables>;
export const CreateCandleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCandle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCandleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"candles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCandle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CandlesCreateOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalErrorProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnauthorizedProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VersionMismatchProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateCandleMutation, CreateCandleMutationVariables>;
export const AllCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryGetAllOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalErrorProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllCategoryQuery, AllCategoryQueryVariables>;
export const AllColorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AllColorOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VersionMismatchProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalErrorProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllColorQuery, AllColorQueryVariables>;
export const CreateColorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateColor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateColorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createColor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ColorCreateOk"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalErrorProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnauthorizedProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VersionMismatchProblem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateColorMutation, CreateColorMutationVariables>;