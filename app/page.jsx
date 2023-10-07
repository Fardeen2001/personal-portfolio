import AboutSection from "@/app/components/AboutSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import ProjectSection from "@/app/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
