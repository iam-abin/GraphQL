export const typeDefs = `#graphql

    # defining the type of Game. Every type is like a node or vertex in a graph
    type Game{
        id: ID!
        title: String!
        platform: [String!]! 
        reviews: [Review!]
    }

    type Review{
        id: ID!
        rating: Int!
        content: String!
        game: Game! # to create relation with Game node in the graph
        author: Author!
    }

    type Author{
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!] 
    }

    # defining type of each query
    type Query{
        reviews: [Review] # query to fetch multiple items
        games: [Game]
        authors: [Author]
        review(id: ID!): Review # query to fetch a single item using id
        game(id: ID!): Game
        author(id: ID!): Author
    }

    type Mutation{
        addGame(game: AddGameInput): Game
        deleteGame(id: ID!):[Game]
    }
    input AddGameInput{ # like we defining interface to define type in TS
        title: String!
        platform: [String!]! 
    }
`;

// Datatypes in graphql are
// Int, Float, String, Boolean, ID

// '!' indicate required field or not allowed to be null
