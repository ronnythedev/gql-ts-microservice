import { Book } from '@prisma/client';
import prismaMock from '@src/__tests__/__mocks__/prismaSingleton';
import { createBook } from '@src/data/bookService';

describe('book service tests', () => {
  describe('create book test', () => {
    test('it should create book with passed in args', async () => {
      const mockBook: Book = {
        id: 1,
        title: 'book title',
        author: 'super author',
      };

      //TODO: mockResolvedValue does not exist on type...
      //prismaMock.book.create.mockResolvedValue(mockBook);

      const bookCreated = await createBook(mockBook.title, mockBook.author);

      expect(bookCreated).toBe(mockBook);
      expect(prismaMock.book.create).toHaveBeenCalledTimes(1);
      expect(prismaMock.book.create).toHaveBeenCalledWith({ data: { title: mockBook.title, author: mockBook.author } });
    });
  });
});
