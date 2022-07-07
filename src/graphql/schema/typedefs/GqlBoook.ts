import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const GqlBook = new GraphQLObjectType({
  name: 'Book',
  description: 'A book',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'id of the book',
    },
    title: {
      type: GraphQLString,
      description: 'title of the book',
    },
    author: {
      type: GraphQLString,
      description: 'author of the book',
    },
  },
});

export default GqlBook;
