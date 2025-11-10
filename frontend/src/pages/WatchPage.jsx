import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer.jsx";
import { getSession } from "../servies/api.js";

export default function WatchPage() {
  const { uid } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    getSession(uid)
      .then((data) => setSession(data.session))
      .catch(() => alert("Session not found"));
  }, [uid]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {session ? (
        <>
          <h2 className="text-xl font-semibold mb-3">
            🎥 Watching Session: {session.unique_id}
          </h2>
          <VideoPlayer />
        </>
      ) : (
        <p>Loading session...</p>
      )}
    </div>
  );
}
