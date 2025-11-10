export const QUERIES = {
  CREATE_SESSION: `
    INSERT INTO live_sessions (type, unique_id, userurl)
    VALUES (?, ?, ?)
  `,

  GET_SESSION_BY_ID: `
    SELECT * FROM live_sessions
    WHERE unique_id = ?
  `,

  CREATE_TABLE_IF_NOT_EXISTS: `
    CREATE TABLE IF NOT EXISTS live_sessions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      type VARCHAR(20),
      unique_id VARCHAR(100) UNIQUE,
      userurl TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
};
