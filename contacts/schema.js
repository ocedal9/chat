const { gql } = require("apollo-server");

const typeDefs = gql`
    type ownerCont @key(fields: "userId") {
        userId: String!
        contacts: [String]!
    }

    input idInput {
        id: String!
    }
    extend type Query {
        getcontacts: [String]!
    }
    extend type Mutation {
        addcontact(input: idInput!): ownerCont!
        createcontacts: [String]
    }
`;

module.exports = typeDefs;
