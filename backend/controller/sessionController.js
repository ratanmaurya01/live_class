import { v4 as uuidv4 } from "uuid";
import { createSession, getSessionByUniqueId } from "../models/sessionModel.js";

export const createSessionHandler = async (req, res) => {
  try {
    const unique_id = uuidv4();
    const base = process.env.BASE_URL || `http://localhost:${process.env.PORT || 4000}`;
    const userurl = `${base}/watch/${unique_id}`;

    await createSession({ type: "admin", unique_id, userurl });

    res.json({ success: true, unique_id, userurl });
  } catch (err) {
    console.error("❌ Create session error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const getSessionHandler = async (req, res) => {
  try {
    const { uid } = req.params;
    const session = await getSessionByUniqueId(uid);
    if (!session) return res.status(404).json({ success: false, error: "Session not found" });

    res.json({ success: true, session });
  } catch (err) {
    console.error("❌ Get session error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
