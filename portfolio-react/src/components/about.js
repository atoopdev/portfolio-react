import React from "react"
import AmandaImg from "../images/portfolio_header.JPG"

export default function About(){
    return <div className="About">
        <div className="content_wrapper">
        <h1>Amanda Toop</h1>
        <h2>Information Technology Specialist</h2>
        <picture>
        <source media="(max-width:374px)" srcset={AmandaImg}>
              <img src={AmandaImg} alt="Picture of Amanda">
        </picture>
        <p>I love creating products that use technology to solve problems. To me, every problem is a fresh adventure and I really enjoy that. For the majority of my working career this has resulted in roles that emphasize providing technology solutions, business analysis, and working closely with users. I find bringing bringing order to chaos exciting!</p>
            
          <P>My current focus is on web development. I really enjoy creating products that are easy to use, efficient, and (ideally) look aesthetically pleasing. </P>

          <p>Outside of technological interests I am an avid cook and Peloton devotee. On the weekends you would find me at a local museum or gallery, or trying a new restaurant in the International District.</p>
        </div>
       
    </div>
}