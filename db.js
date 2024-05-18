
let games = [
	{ id: "1", title: "Zelds, Tears of the Kingdon", platform: ["Switch"] },
	{ id: "2", title: "Final Fantasy 7 Remake", platform: ["Ps5", "Xbox"] },
	{ id: "3", title: "Elder Ring", platform: ["Ps5", "Xbox", "PC"] },
	{ id: "4", title: "Mario Kart", platform: ["Switch"] },
	{ id: "5", title: "Pokemon Scarlet", platform: ["Ps5", "Xbox", "PC"] },
];

let reviews = [
	{ id: "1", rating: 9, content: 'This is a good game', author_id: '1' ,game_id: '2' },
    { id: "2", rating: 10, content: 'This is a good game', author_id: '2' ,game_id: '1' },
    { id: "3", rating: 7, content: 'This is a good game', author_id: '3' ,game_id: '3' },
    { id: "4", rating: 5, content: 'This is a good game', author_id: '2' ,game_id: '4' },
    { id: "5", rating: 8, content: 'This is a good game', author_id: '2' ,game_id: '5' },
    { id: "6", rating: 7, content: 'This is a good game', author_id: '1' ,game_id: '2' },
    { id: "7", rating: 10, content: 'This is a good game', author_id: '3' ,game_id: '1' },
];

let authors = [
	{ id: "1", name: "mario", verified: true },
	{ id: "2", name: "yoshi", verified: false },
	{ id: "3", name: "peach", verified: true },
];


export default { games, reviews, authors }