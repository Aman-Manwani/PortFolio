import "./App.css";
import AboutMe from "./pages/AboutMe";
import Front from "./pages/Front";
import NewProject from "./pages/NewProject";
import ProjectSection from "./pages/ProjectSection";
import Tools from "./pages/Tools";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Front />
      <AboutMe />
      <Tools />
      <ProjectSection />
      <NewProject />
      <Contact/>
    </div>
  );
}

export default App;
