import React, {useState} from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.scss"
import logo from "../assets/images/logo.png"


const Navbar = () => {  
    
    const scrollToTop = () => {scroll.scrollToTop()};
    
    const [click, setClick] = useState(true);
          
    const handleClick = () => setClick(!click)

    const closeMobNav = () => setClick(true)
    return(
        <nav>
           
        <div className = "container navbarList" id="navbarList">
            <div className="nav-col-1" > 
                <img src={logo} alt="logo"  id="nav-logo" onClick={scrollToTop} /> 

            </div>
            <div className={click ? "nav-col-2" : "nav-col-2 active"}  >
                <i id="navIcon" className={click ? "fas fa-bars" : "fas fa-times"} onClick={handleClick}/>
                <div className="links">
                <Link
                    onClick = {closeMobNav}
                    className="navbarList"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-65}
                    duration={600}
                   
                >about me</Link>

                <Link
                    onClick = {closeMobNav}
                    className="navbarList"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={600}
                >skills</Link>

                <Link
                    onClick = {closeMobNav}
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}
                >  
                portfolio</Link>
                </div>
                </div>


        </div>
    </nav>
    )
}


export default Navbar 