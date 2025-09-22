import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import HeroSection from "./components/sections/HeroSection";
import SkillSection from "./components/sections/SkillSection";
import ProjectSection from "./components/sections/ProjectSection";
import AboutSection from "./components/sections/AboutSection";


function App() {
  return (
    <ThemeProvider>
      <div className="relative pb-[100vh]">
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <AboutSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
