import React from "react"

const SkillBar = (props) => {
    return(
        <div className="skill-container">
            <p>{props.name}</p>
            <div className="skill-bar">
                <div className = "skill-progress " style = {{width: props.progress + "%"}}></div>
            </div>  
        </div>
    )
}

export default SkillBar