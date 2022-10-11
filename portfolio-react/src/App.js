import logo from './logo.svg';
import './index.css';
import ProjectData from "./data"
import ProjectCard from "./components/projectcard"

function App() {
const projectElements = ProjectData.map((project)=>{
  return <ProjectCard
  key={project.id}
  project={project} />
})

console.log("projectElements: ", projectElements)

  return (
    <div className="App">
     <section className="content_wrapper featured-projects">
      <h2>Featured projects</h2>
      <p>View selected projects below. Complete list of projects can be found at <a href="https://www.amandatoop.com/projects.html">https://www.amandatoop.com/projects</a>.</p>
      {projectElements}
      </section>
    </div>
  );
}

export default App;
