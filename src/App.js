import './App.css';
import Awards from './components/Awards';
import Education from './components/Education';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Objectives from './components/Objectives';
import Projects from './components/Projects';
import Research from './components/Research';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container-fluid p-0">
        <Objectives />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Languages />
        <hr className="m-0" />
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons mb-4">
              <li ><i className="fab fa-python"></i> <span>Python, Keras, Tensorflow, Pandas, Numpy </span></li>
              <li ><i className="fab fa-github"></i> <span>Github, Gitlab, Git, Documentation</span></li>
              <li ><i className="fab fa-linux"></i> <span>Linux, Shell, Cloud (GCP)</span></li>
              <li ><i className="fab fa-js"></i> <span> Javascript, React, Vuejs, Angular2</span> </li>
              <li ><i className="fab fa-php"></i><span> PHP, Laravel </span> </li>
              <li ><i className="fab fa-html5"></i> <span> Sass, Bootstrap, HTML5, CSS </span> </li>
              <li ><i className="fa-solid fa-database"></i> <span> MySQL, PostgreSQL, MongoDB</span> </li>
              <li ><i className="fa-brands fa-google"></i> <span> Google Cloud Platform</span> </li>
            </ul>

          </div>
        </section>
        <hr className="m-0" />
        <Research></Research>
        <hr className="m-0" />
        <Projects />
        <hr className="m-0" />
        <Awards/>

      </div>
    </div>
  );
}

export default App;
