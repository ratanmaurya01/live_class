export default function VideoPlayer() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <video
        className="w-full rounded-lg border shadow-lg"
        controls
        autoPlay
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </div>
  );
}
