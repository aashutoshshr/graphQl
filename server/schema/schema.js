const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const books = [
  { name: 'Name fo the wind', genre: 'Fantsy', id: 1 },
  { name: 'Name fo the wind 2', genre: 'Fantsy', id: 2 },
  { name: 'Final Empire', genre: 'Fantsy', id: 3 },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: 4 },
]
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      arg: { id: { type: GraphQLString }},
      resolve(parent, args) {
        // code to get data from db / other souce
        return _.find(books, { id: args.id });
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});