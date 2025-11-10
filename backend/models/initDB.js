import { pool } from "./db.js";

(async () => {
  try {
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
    console.log("✅ live_sessions table ensured.");
  } catch (err) {
    console.error("❌ Error creating table:", err);
  }
})();
