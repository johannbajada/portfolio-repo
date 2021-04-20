import React from "react"
import "./Header.scss"
import logo from "../assets/images/logo.png"
import headerBackground from "../assets/images/bck-img.png"

 const Header = () => {
        
    return(
        
     <header style= {{backgroundImage: `url(${headerBackground})`}} >
        <div className="container header">  
            <div className="title-section">
                <img className="logo" src={logo} alt="logo" />
                <h1 className="main-title">JOHANN BAJADA</h1>
                <h3 className="main-subtitle">Front-end Developer</h3> 
            </div>
        </div>
    </header>

    )
}

export default Header