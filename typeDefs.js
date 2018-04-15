module.exports = `
  type Query {
    books: [Book],
    bookById(id: ID): Book
  }
  type Book {
    author: String,
    id: ID,
    title: String
  }
`;