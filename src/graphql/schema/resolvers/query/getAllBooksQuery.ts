import { GraphQLList } from 'graphql';
import GqlBook from '../../typedefs/GqlBoook';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import { getAllBooks } from '@src/data/bookService';
import { Book } from '@prisma/client';

const getAllBooksQuery = {
  type: new GraphQLList(GqlBook),
  resolve: async (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<Book[]> => {
    return getAllBooks();
  },
};

export default getAllBooksQuery;
