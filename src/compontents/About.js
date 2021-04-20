import React from "react"
import "./About.scss"
import selfPortfrait from "../assets/images/photo.png"
import CV from "../assets/images/CV.png"

const About = () =>{
    return(
        <div className="about">
        <div className="container container-flex">
            <div className="about-col-1">
                <h1 className="about-title">ABOUT ME</h1>
                <p className="about-description"> Born and raised in Gozo, I am a 21 year old man that 
                    has always been fascinated with how far the human race have come from with only 
                    ones and zeros. I aspire to be part of this history and write as much code as possible!</p>

                <table className="about-table">
                    <tr>
                        <td>Age:</td>
                        <td className="blue">21</td>
                    </tr>
                    <tr>
                        <td>Nationality:</td>
                        <td className="blue">Malta</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td className="blue">79073739 / 21563739</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td className="blue">Il-qiegha, Laurent Ropa Street, Xaghra, Gozo, Malta</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td className="blue">johannbajada44@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Website:</td>
                        <td className="blue">johannbajda.com</td>
                    </tr>
                    
                </table>
                
                  {/* social media icons  */}
                 <div className="social-icons">
                    <a className="fa fa-at" target="_blank"href="mailto:johannbajada44@gmail.com"></a>
                    <a className="fa fa-linkedin" target="_blank" href="https://www.linkedin.com/in/johann-bajada-0b68a513a/"></a>
                    <a className="fa fa-github" target="_blank" href="https://github.com/johannbajada"></a>
                    <a className= "fa fa-facebook" target="_blank" href="https://www.facebook.com/johann.bajada"></a>
                    <a className="fa fa-instagram" target="_blank" href="https://www.instagram.com/johannbajada/"></a>                    
                 </div>

                 <a className="cv-btn" href={CV} download="Johann Bajada CV" >Download CV</a>
                          
                
            </div>

            

            <div className="about-col-2">
                <img src={selfPortfrait} alt="self portrait" id="portrait" />
            </div>
            
        </div>
    </div>
    )
}

export default About