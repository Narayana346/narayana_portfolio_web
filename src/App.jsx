import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const defaultTitle = document.title;
    const favicon = document.getElementById("favicon");
    const defaultIcon = favicon?.href;
    const awayIcon = "/assets/images/Back.png";

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        document.title = defaultTitle;
        if (favicon) favicon.href = defaultIcon;
      } else {
        document.title = "Come back to my portfolio";
        if (favicon) favicon.href = awayIcon;
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-1/4 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-[450px] h-[450px] bg-tertiary-container/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Navbar />
      <main className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 space-y-space-3xl pt-10 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
