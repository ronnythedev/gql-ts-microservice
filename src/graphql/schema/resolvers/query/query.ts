import { GraphQLObjectType } from 'graphql';
import getAllBooksQuery from './getAllBooksQuery';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: getAllBooksQuery,
  },
});

export default query;
