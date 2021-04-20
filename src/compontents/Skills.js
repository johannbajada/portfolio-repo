import React from "react"
import "./Skills.scss"
import SkillBar from "./SkillBar"

const Skills = () =>{
    return(
        <div className="skills">
            <div className="container">
                
                <h1 className="skills-title">SKILLS</h1>
                
                <div className="skills-container">
                    
                    <div className="skills-col-1">  {/* skills col */}
                        
                        <SkillBar name = "HTML" progress = "91" />
                        <SkillBar name = "Javascript" progress ="40" />
                        <SkillBar name = "CSS" progress ="80" />
                    
                    </div>
                     <div className="skills-col-2">  {/* skills col 2 */}         

                        <SkillBar name = "Python" progress ="40" />
                        <SkillBar name = "Adobe Kit" progress ="90" />
                        <SkillBar name = "React.js" progress ="25" />
                    
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Skills