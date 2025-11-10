import { useState } from "react";

import VideoPlayer from "../components/VideoPlayer.jsx";
import { createSession } from "../servies/api.js";

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const startSession = async () => {
    setLoading(true);
    try {
      const data = await createSession();
      setSession(data);
    } catch (err) {
      alert("Error creating session");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!session ? (
        <button
          onClick={startSession}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {loading ? "Starting..." : "START SESSION"}
        </button>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">✅ Session Created!</h2>
          <p>
            Share with student:{" "}
            <a
              href={session.userurl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {session.userurl}
            </a>
          </p>
          <VideoPlayer />
        </div>
      )}
    </div>
  );
}
