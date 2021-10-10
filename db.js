import pg from 'pg'


const pool = new pg.Pool(
  {
    user: 'victortwu',
    host: 'localhost',
    port: 5432, // default port for posgres, not sure why this works
    database: 'first_pern'
  }
)

export default pool
