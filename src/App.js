import './App.css';
import AboutMe from './pages/AboutMe';
import Front from './pages/Front';
import ProjectSection from './pages/ProjectSection';
import Tools from './pages/Tools';

function App() {
  return (
    <div className="App">
      <Front/>
      <AboutMe/>
      <Tools/>
      <ProjectSection/>
    </div>
  );
}

export default App;
