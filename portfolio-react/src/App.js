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
     <div className="featured-projects">{projectElements}</div>
    </div>
  );
}

export default App;
