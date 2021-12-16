import React, {useEffect} from 'react'
import Heading from './Heading'

const Learnings = ()=>{
const texts = ['react js','node js ','laravel','python','functional programming','MongoDB'];

useEffect(()=>{
        let count = 0;
        let index = 0;
        let letter = '';
        let currentText = '';
        let speed = 200;
       (function type(){
                     
               if(count === texts.length){
                       count = 0;
               }

               currentText = texts[count];

               letter = currentText.slice(0,++index);

                document.querySelector('.typing').textContent = letter.toUpperCase();
                     if(letter.length === currentText.length){
                               
                             index = 0;
                             count++;
                     }

                     setTimeout(type,speed);

       }());  


});

        return(
            <div className="Learnings section" id="learnings" >
                   <div className="learnings-type"> <Heading text="Today I'm learning"/>
                    <p className="typing"></p>

                    </div>

                    
                 <div className="learnings-text">
                    <span>Learning is continous and fun; that is why I love exploring and trying new things.</span>
                    <br></br>
                    <span>And that makes me a student forever.</span>
                    <br></br>
                    <span>I spend my day after my class watching tech videos on youtube and do it on my favorite IDE.</span>
                    </div>
            </div>
        )
}

export default Learnings