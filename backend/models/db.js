import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Ensure table exists
(async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS live_sessions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      type VARCHAR(20),
      unique_id VARCHAR(100) UNIQUE,
      userurl TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
})();
