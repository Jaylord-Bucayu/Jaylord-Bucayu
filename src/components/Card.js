import React from 'react'
import CardFooter from './CardFooter'


const Card = ({img,cardf_title,link})=>{
    return(
            <div className="Card">
                <a href={link} target="_blank">
            
            <img src={process.env.PUBLIC_URL+`${img}`} alt="Logo" />
                <CardFooter  cardf_title={cardf_title}/>
                </a>
            </div>
    )
}

export default Card