import { createBook } from '@src/data/bookService';
import { Book } from '@prisma/client';
import GqlBook from '../../typedefs/GqlBoook';
import { GraphQLNonNull } from 'graphql';
import CreateBookInput from '../../typedefs/CreateBookInput';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';

const createBookMutation = {
  type: GqlBook,
  args: {
    input: {
      type: new GraphQLNonNull(CreateBookInput),
      description: 'Book input to be created',
    },
  },
  resolve: async (
    _source: unknown,
    { input: { title, author } }: any,
    _context: IApolloServerContext
  ): Promise<Book> => {
    return createBook(title, author);
  },
};

export default createBookMutation;
