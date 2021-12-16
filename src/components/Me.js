import React,{ useState, useEffect } from 'react'
import Heading from './Heading';
import Info from './Info';
import Projects from './Projects';
const Me = ()=>{
  


    return(
        <div className="Me section" id="me">
          <Heading text={"Hi, i'm Jaylord, just a typical boy who loves to create websites "}/>
       
          <Info text={"I am a student of Information Technology that aspiring to be a Web developer."}/>


        <Info text={"I created my first website when I was 16 years old, and until now, I have become more obsessed with the powers of Web Technologies."}/>
        <Info text={"My Career Mission is to improve and contribute technologies for society and business."}/>

       

        </div>
    )
}

export default Me;