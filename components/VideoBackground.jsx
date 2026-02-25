export default function VideoBackground() {
  return (
    <section className="max-w-7xl mx-auto py-24">
      <div className="container mx-auto px-6 text-center">
        <video className="w-full h-auto mt-12 rounded-xl" autoPlay loop muted>
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
