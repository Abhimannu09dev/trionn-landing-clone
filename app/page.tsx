import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import VideoBackground from "../components/VideoBackground";
import KnowUs from "../components/KnowUs";
import SocialLinks from "../components/SOCIAL_LINKS";
import RecentWork from "../components/RecentWork";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <VideoBackground />
      <RecentWork />
      <KnowUs />
      <SocialLinks />
      <Footer />
    </main>
  );
}
