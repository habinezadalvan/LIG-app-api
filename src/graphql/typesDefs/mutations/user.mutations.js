import { gql } from 'apollo-server-express';

export const userMutations = gql`
  type Mutation {
    addUser(input: AddUserInput!): User
    userLogin(input: LoginInput!): LoginResponse
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): String
    forgotPassword(email: String!): String
    resetPassword(input: ResetPassword!): String
    UpdateUserProfile(input: UpdateUserProfileInput, file:Upload): User
    logout: Boolean
  }
`;
