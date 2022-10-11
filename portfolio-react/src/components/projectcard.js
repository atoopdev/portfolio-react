import React from "react"

export default function ProjectCard(props){
    console.log("isMainPage: ", props.isMainPage)
    
    return <div className="project-Card">
        <h1 className="project-title">{props.project.title}</h1>
        <a href={props.project.link} className="project-btn"><img src={props.project.img} alt={props.project.title}></img></a>
        <p className="project-description">{props.project.description}</p>

        {/* conditional display if is blog link */}
        {props.project.blogLink&& <p>Read more about my experience <a href={props.project.blogLink} className="blog-link">on my blog.</a></p>}
        <a href={props.project.link} className="project-btn">View Project</a>
    </div>
}