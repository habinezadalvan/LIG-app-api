import { gql } from 'apollo-server-express';

export const contributionTypes = gql`
    enum PaymentOptions {
        bank
        mobile
    }
    type Contribution {
        id: ID!
        amount: Int
        approved: Boolean
        paymentOptions: PaymentOptions
        bankReceipt: File
        contributionOfMonthOf: String!
        owner: User
        createdAt: String
    }

    input ContributionInput {
        amount: Int!
        paymentOption: PaymentOptions
        contributionOfMonthOf: String!
    }
    input ContributionUpdateInput {
        amount: Int
        paymentOption: PaymentOptions
        contributionOfMonthOf: String
    }
`;
