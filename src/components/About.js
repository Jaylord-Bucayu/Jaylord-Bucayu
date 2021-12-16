import React from 'react'
import { FaGithub , FaLinkedin} from 'react-icons/fa';

const About = ()=>{
    return(
            <div className="About">
                <div className="Image">
                 <img src={process.env.PUBLIC_URL + '/images/pp.jpg'} alt="Logo" />

                </div>
                <div>
                <p>Jaylord C. Bucayu</p>
                <ul>
                    <li>  <i>  <FaGithub /> </i><a href="https://github.com/Jaylord-Bucayu" target="_blank">Github</a></li>
                    <li>   <i>  <FaLinkedin /> </i><a href="https://www.linkedin.com/in/jaylord-bucayu-887737196/" target="_blank">Linkedin</a></li>
                </ul>
              
             
                </div>
          
            </div>
    )
}

export default About