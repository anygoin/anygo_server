import pkg from "pg";
const { Pool } = pkg;

const dbHost = process.env.DB_HOST ?? "";
const dbUser = process.env.DB_USER ?? "";
const dbPassword = process.env.DB_PASSWORD ?? "";
const dbName = process.env.DB_NAME ?? "";
const port = process.env.DB_PORT ?? "";

const pool = new Pool({
  user: dbUser,
  host: dbHost,
  database: dbName,
  password: dbPassword,
  port: port,
  connectionTimeoutMillis: 10000, // 10s
  idleTimeoutMillis: 30000, // 30s
});

// Function to query the database
const query = (text, params) => {
  return new Promise((resolve, reject) => {
    pool
      .query(text, params)
      .then((res) => resolve(res.rows)) // Resolve with data
      .catch((err) => reject(err)); // Reject if error occurs
  });
};

export default query;
