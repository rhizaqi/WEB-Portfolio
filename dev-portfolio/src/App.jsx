import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <ThemeProvider>
        <div>
          <Navbar />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
