import React from 'react'
import Heading from './Heading'
import Input from './Input'
import { init} from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_XRRYplSz4Roy5WGD2dTmu");


const Contact = ()=>{

    
    function sendEmail(e){

        e.preventDefault();
        console.log(e.target);
        var templateParams = {
          name: 'James',
          notes: 'Check this out!'
      };
       
      emailjs.sendForm('service_bxzfifx', 'template_fozu5hh', e.target, )
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         e.target.reset();
      }, function(error) {
         console.log('FAILED...', error);
      });
      }
  
      
    return(
        <div className="Contact section" id="contact">
           
            <form onSubmit={sendEmail}>
            <Heading text={"Want to work something with me? Come on, let's do it"}/>
            <span id="email">jaylordbucayu@gmail.com</span>
            <div className=" pad-10">

            <Input label={"your name"}  nameTitle={'from_name'}/>  <Input label={"your email"} nameTitle={'from_email'}/>
            </div>
            <div className="pad-10 grid-2-2">
            <Input label={"your message"} nameTitle={'message'}/>
            <div class="submit-btn"> <button type="submit">Submit</button></div> 
                </div>
                
                </form>
        </div>
    )
}

export default Contact