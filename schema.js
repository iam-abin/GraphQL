export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String!
        platform: [String!]!
    }

    type Review{
        id: ID!
        rating: Int!
        content: String!
    }

    type Author{
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query{
        reviews: [Review]
        games: [Game]
        authros: [Author]
    }
`

// Datatypes in graphql are
// Int, Float, String, Boolean, ID

// '!' indicate required field or not allowed to be null