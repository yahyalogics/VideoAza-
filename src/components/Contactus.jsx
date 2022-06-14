import React from 'react';
import './contactus.css';
import Navbar from './Navbar';
const Contactus = () => {
    return (  
    <div>  
        <div>
        <Navbar/>
        </div >
         <div class = "remchange">
        <h1 class="heading">What Our <b class="headsub">Clients</b> Say</h1>
        <div class="remarks">
            <p >"<b> <span id="spin"></span></b>"</p>
        </div>
        </div>
        <div class="btn-group jscss" role="group" aria-label="Basic outlined example">
            <button  type="button"  onclick="show();" class="btn btn-outline-primary btn1">Website Development</button>
            <button  type="button" onclick="blocker();" class="btn btn-outline-primary graphic-btn btn1">Graphic Designing</button>
            <button type="button"  onclick="blockerdb();" class="btn btn-outline-primary db-btn btn1">Database Projects</button>
        </div>
        <br/>
        <br/>
        <div >
      <a href=""> <img id = "hide" class = "jselector desig" src="images/webdesign.jpg" alt="" width="200"/></a>
     
    </div>
    <div id ='show' class = "desig">
      <a href="graphicdesigning.html"> <img class = "jselector" src="images/graphicjs.jpeg" alt="" width="200"/></a>
    </div>
    <div id ='showdb' class = "desig">
      <a href="database.html"><img class = "jselector" src="images/dbjs.jpg" alt="" width="200"/></a>
      
    </div>
    <div class="contact">
      <form class = "contactusform newclass" action="https://formspree.io/f/xeqnzvey"
      method="POST" >       
        
        <input  name="name" type="text" class="feedback-input placetxt newclassarea" placeholder="Name" />   
        <input  name="email" type="email" class="feedback-input placetxt newclassarea" placeholder="Email" />
        <textarea   name="message" class="feedback-input placetxt newclassarea" placeholder="Message"></textarea>
       
        <button class="btn Get-Started btn-default3 btn-outline-success my-2 my-sm-0 color-me-btn mr-5" type="submit" value="SUBMIT">Submit</button>
      </form>
    
    </div>

        </div>
 
    );
}
 
export default Contactus;