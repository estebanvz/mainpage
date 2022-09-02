import './App.css';
import Awards from './components/Awards';
import Education from './components/Education';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Objectives from './components/Objectives';
import Projects from './components/Projects';
import Research from './components/Research';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container-fluid p-0">
        <Objectives />
        <hr className="m-0" />
        <Projects />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Languages />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Research />
        <hr className="m-0" />
        <Awards />

      </div>
    </div>
  );
}

export default App;
