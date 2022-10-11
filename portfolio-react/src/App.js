import logo from './logo.svg';
import './index.css';
import ProjectData from "./data"
import ProjectCard from "./components/projectcard"

function App() {
const projectElements = ProjectData.map((project)=>{
  return <ProjectCard
  key={project.id}
  project={project}
  isMainPage={"true"} />
})

console.log("projectElements: ", projectElements)

  return (
    <div className="App">
     Project listing:
     <div className="featured-projects">{projectElements}</div>
    </div>
  );
}

export default App;
