import React from "react"
import "./Footer.scss"
import logo from "../assets/images/logoDark.png"

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <img src = {logo} id="logo" />
                <p>Design and Develop Johann Bajada | © 2020</p>    
            </div>
        </footer>
    )
}

export default Footer