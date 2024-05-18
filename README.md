# GraphQL

- To start the appolo server
```
npm start
```

🚀  Server ready at http://localhost:4000/  - This will open up a appolo server ui where we can test each functions

## types

Query - can be used to define functions to query data 
Mutation - to mutate the data. can be used to define functions to insert, update, delete data.

- Request

query ExampleQuery {
  authors { 
   id,
   name 
  }
}

ExampleQuery is a name given to the query. No need of that in a real application.
author is a node of the graph from which we take data.
id, name are the data we are fetching. It will fetch id, name fields from all the documents

- Response

{
  "data": {
    "authors": [
      {
        "id": "1",
        "name": "mario"
      },
      {
        "id": "2",
        "name": "yoshi"
      },
      {
        "id": "3",
        "name": "peach"
      }
    ]
  }
}

### To get a single document

- Request

in the operation sections add,
query ExampleQuery($gameId: ID!) {
  game(id: $gameId) {
    title
  }
}

and in the variable sections,
{
  "gameId": "1",
}

- Response

{
  "data": {
    "game": {
      "title": "Zelds, Tears of the Kingdon"
    }
  }
}