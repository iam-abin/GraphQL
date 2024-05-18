import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

// server setup
// 'typeDefs' outline the structure of the data and queries.
// resolvers are the functions that retrieve the actual data for those queries.

const server = new ApolloServer({
	typeDefs, // defining types of data for author, game and review // like a nodes in a graph
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at ${url}`);
