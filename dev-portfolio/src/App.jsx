import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <div>
      <ThemeProvider>
        <div>
          <Navbar />
          <HeroSection />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
