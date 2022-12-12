import "./App.css";
import Line from "./components/Line";
import HLine from "./HLine"
import Home from "./components/Home";
import Landing from "./components/Landing";
import About from "./components/About"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      
      <Home />  
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
