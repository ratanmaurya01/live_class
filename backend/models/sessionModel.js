import { pool } from "./db.js";
import { QUERIES } from "./queries.js";

export const createSession = async ({ type, unique_id, userurl }) => {
  const [result] = await pool.query(QUERIES.CREATE_SESSION, [type, unique_id, userurl]);
  return result.insertId;
};


export const getSessionByUniqueId = async (unique_id) => {
  const [rows] = await pool.query("SELECT * FROM live_sessions WHERE unique_id = ?", [unique_id]);
  return rows[0];
};
