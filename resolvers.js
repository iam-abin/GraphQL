// 'resolvers' provide the functions to fetch the data for the schema fields.
import db from "./db.js";

export const resolvers = {
	Query: {
		games() {
			return db.games;
		},
		reviews() {
			return db.reviews;
		},
		authors() {
			return db.authors;
		},

		game(_, args) {
			return db.games.find((game) => game.id === args.id);
		},
		review(_, args) {
			return db.reviews.find((review) => review.id === args.id);
		},
		author(_, args) {
			return db.authors.find((author) => author.id === args.id);
		},

		//  when we accessing a game() there will be a reviews field. So if we want to access reviews associated
		// with a game , game() looks for Game object

		// Game: {
		//     reviews(parent){
		//         return db.reviews.filter((r)=> r.author_id === parent.id)
		//     }
		// },

		// Author: {
		//     reviews(parent){
		//         return db.reviews.filter((r)=> r.game_id === parent.id)
		//     }
		// },
		// Review: {
		//     author(parent){
		//         return db.authors.find((a)=> a.id === parent.author_id)
		//     },
		//     game(parent){
		//         return db.games.find((g)=> g.id === parent.game_id)
		//     }
		// },
	},
	Mutation: {
		deleteGame(_, args) {
			db.games = db.games.filter((g) => g.id != args.id);
			return db.games;
		},

		addGame(_, args) {
			// doing spreading is to add id property to the game
			let game = {
				...args.game,
				id: Math.floor(Math.random() * 10000).toString(),
			};

			db.games.push(game);
			return game;
		},
	},
};
