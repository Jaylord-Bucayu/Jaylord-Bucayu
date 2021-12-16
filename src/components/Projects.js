import React from 'react'
import Card from './Card';
const Projects = ()=>{
        
        

    return(
            <div className="Projects section" id="project">
                        <div className="project-scroll">
                          
                       
                       
                        <Card _img={'/images/project_1.jpg'} cardf_title="City Online Market" link={"https://city-market.online/"} />
                        <Card  _img={'/images/project_2.jpg'} cardf_title="Tracking the Crown" link={"http://trackingthecrown-app.herokuapp.com/"}/>
                        <Card  _img={'/images/project_3.jpg'} cardf_title="Visual Drums" link={"https://vdrum.herokuapp.com/"}/>
                        <Card  _img={'/images/project_4.jpg'} cardf_title="Key Code Detector" link={"https://keycode-detector.herokuapp.com/"}/>

                        </div>
                    
                   
            </div>
    )
}

export default Projects