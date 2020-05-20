import { gql } from 'apollo-server-express';


export const userQueries = gql`
    type Query {
        users(createdAt: String): [User]
    }
`;
