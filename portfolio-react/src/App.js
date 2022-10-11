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
     <div className="content-wrapper featured-projects">
      <h2>Featured projects</h2>
      {projectElements}
      </div>
    </div>
  );
}

export default App;
