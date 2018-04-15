const { books } = require('./mockData')

module.exports = {
  Query: {
    books: () => books,
    bookById: (_, { id }) => books[id]
  }
}