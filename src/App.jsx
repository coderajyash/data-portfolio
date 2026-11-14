import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App = () => (
  <div className="relative min-h-screen overflow-x-clip bg-ink text-neutral-300">
    <a
      href="#about"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-ink"
    >
      Skip to content
    </a>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  </div>
);

export default App;
