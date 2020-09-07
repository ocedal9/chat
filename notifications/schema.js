const { gql } = require("apollo-server");

const typeDefs = gql`
    type Notification @key(fields: "target") {
        id: ID!
        emisor: String!
        notitype: String!
        target: String!
        status: String!
    }

    input notiInput {
        notitype: String!
        target: String!
        status: String!
        emisor: String!
    }

    extend type Query {
        getnotis: [Notification]!
    }

    extend type Mutation {
        friendreq(input: notiInput!): Notification!
    }
`;

module.exports = typeDefs;
