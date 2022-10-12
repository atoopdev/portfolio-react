import React from "react"
import {Nav, NavLink, NavMenu} from "./NavBarElements"

export default function NavBar(){
    return(
        <>
        <Nav>
            <NavMenu>
                <NavLink to="/projects" activeStyle>Projects</NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}