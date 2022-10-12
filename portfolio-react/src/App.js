import logo from './logo.svg';
import './index.css';
import ProjectData from "./data"
import ProjectCard from "./components/projectcard"
import About from "./components/about"

import NavBar from "./components/NavBar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Pages/index"
import Projects from "./components/Pages/projects"


function App() {
  const projectElements = ProjectData.map((project)=>{
    if(project.isFeatured===true){
      return <ProjectCard
      key={project.id}
      project={project} />
      }
    })

  console.log("projectElements: ", projectElements)

  return (
    <div className="App">
      <About />
      <div className="featured-projects">
     <section className="content_wrapper">
      <h2>Featured projects</h2>
      <p>View selected projects below. Complete list of projects can be found at <a href="https://www.amandatoop.com/projects.html">https://www.amandatoop.com/projects</a>.</p>
      {projectElements}
      </section>
      </div>
    </div>
  );
}

export default App;
