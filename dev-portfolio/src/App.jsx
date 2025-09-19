import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import HeroSection from "./components/sections/HeroSection";
import SkillSection from "./components/sections/SkillSection";

function App() {
  return (
    <ThemeProvider>
      <div className="relative pb-[100vh]">
        <Navbar />
        <HeroSection />
        <SkillSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
