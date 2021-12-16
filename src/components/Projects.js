import React from 'react'
import Card from './Card';


const Projects = ()=>{
        
        

    return(
            <div className="Projects section" id="project">
                        <div className="project-scroll">
                          
                       
                       
                        <Card img={'images/projectcom.jpg'} cardf_title="City Online Market" link={"https://city-market.online/"} />
                        <Card  img={'images/projectcovid.jpg'} cardf_title="Tracking the Crown" link={"http://trackingthecrown-app.herokuapp.com/"}/>
                        <Card  img={'images/projectdrums.jpg'} cardf_title="Visual Drums" link={"https://vdrum.herokuapp.com/"}/>
                        <Card  img={'images/projectkey.jpg'} cardf_title="Key Code Detector" link={"https://keycode-detector.herokuapp.com/"}/>

                        </div>
                    
                   
            </div>
    )
}

export default Projects