import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";

// server setup
const server = new ApolloServer({
	typeDefs, // defining types of data for author, game and review // like a nodes in a graph
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at ${url}`);