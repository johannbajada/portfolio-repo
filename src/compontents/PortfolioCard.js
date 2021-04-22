import React from "react"

const PortfolioCard = (props) => {
  
    
    return(   
        <div  className="portfolioCard" >
            <img src= {props.img}/>
            <h3>{props.projectName}</h3>
            <p>{props.projectType}</p>
            <a target="_blank" href={props.href}>See more</a>
        </div>
    )
}

export default PortfolioCard