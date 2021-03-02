require('dotenv').config()
// {
//   path: process.env.NODE_ENV === 'test' ? '.env.test': '.env'
// }

module.exports = {
  "dialect": "sqlite",
  storage: process.env.NODE_ENV === "test" ?
    "./src/__tests__/moveit.test.database.sqlite3"
    : "./src/database/moveit.database.sqlite3",
  define: {
    timestamps: true,
  },
}