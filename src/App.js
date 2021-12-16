
import './App.scss';
import About from './components/About';
import Nav from './components/Nav';
import Me from './components/Me';
import React, { Component, useState, useEffect }  from 'react';
import { Routes, Route, Outlet } from "react-router-dom";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Learnings from './components/Learnings';

function App() {

  const paths = [
    
 '/',
  '/projects',
 'contact',
  ];

 
  const [scrollDir, setScrollDir] = useState("scroll-down");
  const [dir, setDir] = useState(true);

  const detectScroll = (item)=>{

      item.addEventListener("scroll",()=>{
          alert('screool;es');
      });
  }

  useEffect(() => {
    
  

      const learning = document.querySelector('.Learnings');

      detectScroll(learning);


    
 
    const scrollContainer = document.querySelector(".Projects");
    const scrollElement = document.querySelector('.project-scroll');
    const wholeWindow = document.querySelector(".container");
  
    scrollElement.scrollLeft = 5;
    scrollContainer.addEventListener("wheel", (evt) => {
     
    
       evt.preventDefault();
        // console.log(evt);
        
        var newScrollLeft = scrollElement.scrollLeft;
        var scrollWidth = scrollElement.scrollWidth;
     
    

        scrollElement.scrollLeft += evt.deltaY;
 
        console.log('scroll to left '+scrollElement.scrollLeft);
    
    
       
      

        if(parseInt(scrollWidth - newScrollLeft  ) <= parseInt(scrollElement.clientWidth) ){

          if(scrollDir == "scroll-down"){
            scrollElement.scrollLeft = scrollElement.clientWidth - 5;
            window.location = '#learnings';
            window.location.url = "#learnings";
          
         
          }
         
    
       
        }
        if(scrollElement.scrollLeft < 4){
          scrollElement.scrollLeft = 5;
          window.location = '#me';
         
        }
      
      


    });


   
   

   
  });
 
  return (
    <div className="App">
    
      <About/>
  
   
    
   
<div className="container">
<Me/>
 

  
 <Projects/>

    <Learnings/>

 <Contact />
</div>
   
 


    
    
      {/* <Routes>
        <Route  hfref element={<Me/>}/>
    
        <Route  path="/projects" element={<Projects/>}/>

        <Route  path="/contact" element={<Contact/>}/>
      </Routes> */}
    
      <Nav/>
    </div>
  );
}

export default App;
