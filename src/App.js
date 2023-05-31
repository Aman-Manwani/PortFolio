import "./App.css";
import AboutMe from "./pages/AboutMe";
import Front from "./pages/Front";
import NewProject from "./pages/NewProject";
import ProjectSection from "./pages/ProjectSection";
import Tools from "./pages/Tools";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Tools />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/collaborate" element={<NewProject />} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
