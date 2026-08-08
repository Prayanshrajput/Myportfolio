import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-sm text-gray-500 glass mt-auto relative z-10">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Prayansh Rajput. All rights reserved.</p>
          <p className="mt-2 text-xs">Built with Next.js, Tailwind CSS & Framer Motion.</p>
        </div>
      </footer>
    </>
  );
}
