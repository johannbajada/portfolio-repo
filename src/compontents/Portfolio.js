import React, {useState } from "react"
import "./Portfolio.scss"
import porfolioData from "./portfolioData"
import PortfolioCard from "./PortfolioCard" 

const Portfolio = () =>{
   

    const [state, setState] = useState(porfolioData); 

    const handleClick=(e)=>{
        let word = e.target.value; 
        if(word==="all"){
            setState(porfolioData)
        }
        else if(word === "react"){
            const filtered = porfolioData.filter(info => info.type === "react")

            console.log(porfolioData.filter(info => info.type === "react"))
            setState(filtered); 
        }

        else if(word === "javascript"){
            const filtered = porfolioData.filter(info => info.type === "javascript")
            setState(filtered); 
        }

        else if(word === "graphics"){
            const filtered = porfolioData.filter(info => info.type === "graphics")
            setState(filtered); 
        }
    }
    const portfolioComponents = state.map(info => <PortfolioCard key ={info.id} img = {info.img} 
        projectName = {info.projectName} projectType = {info.projectType}/>)


        return(
        <div className="portfolio">
            <div className="container container-left">
                <h1 className="portfolio-title" id="portfolio-title">PORFOLIO</h1>      
                
                <div className="portfolio-filter">
                  <input onClick={handleClick} type="radio" name="filter" id="All" value="all" />
                  <label for="All">All</label>
                    
                  <input onClick={handleClick} type="radio" name="filter" id="react" value="react"/>
                  <label for="react">React</label>
                    
                  <input onClick={handleClick} type="radio" name="filter" id="javascript" value="javascript"/>
                  <label for="javascript">javascript</label>
                    
                  <input onClick={handleClick} type="radio" name="filter" id="graphics" value="graphics"/>
                  <label for="graphics">Graphics</label>
                    
                  <div class="slider"></div>
                </div>


                <div className="portfolio-grid">
                    {portfolioComponents}
                </div>
            </div>
        </div>
        )
}

export default Portfolio