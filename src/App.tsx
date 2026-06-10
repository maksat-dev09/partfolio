import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <div className="relative overflow-hidden px-5 pb-20 pt-10 sm:px-8 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-radial opacity-90" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Hero />
          </motion.div>
          <main className="space-y-24 pt-16">
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
