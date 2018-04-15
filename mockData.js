const casual = require('casual')

const mocks = {
  // Mocks the data for a single book.
  // Works with defined resolvers.
  Book: () => ({
    author: casual.full_name,
    id: casual.integer(0, 10),
    title: casual.title
  })
}

const books = [
  {
    author: 'J.K. Rowling',
    id: 0,
    title: "Harry Potter and the Sorcerer's stone"
  },
  {
    author: 'Michael Crichton',
    id: 1,
    title: 'Jurassic Park'
  },
];


module.exports = {
  books,
  mocks
}