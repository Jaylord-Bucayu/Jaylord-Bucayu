import React, { Component }  from 'react';

import Me from './Me';
const Nav = ()=>{
    return(
        <div className="Nav">
             
        <nav>
          <ul>
            <li>
              
              <a href="/#me">Me</a>
            </li>
            <li>
            <a href="/#project">Projects</a>
            </li>
            <li>
            <a href="/#learnings">Learnings</a>
            </li>

            <li>
            <a href="/#contact">Contact</a>
            </li>
          </ul>
        </nav>

   
  
  

        </div>
    )
}


export default Nav;