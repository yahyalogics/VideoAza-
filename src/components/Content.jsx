
import React from 'react';
import './navbar.css';
import './content.css';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
const Content = () => {
    return (
      
        <div class="container-fluid">
       <Navbar/>
        <div class="row Diamond">
          <div class="col-sm">
            <p class="Video-Call">Video Call</p>
            <div class="col-lg-6">
            <p class="Video-Call2">The best video call services for chatting with friends,family and much more!.you can use it for office,bussiness meetings and presenting projects.It uses latest React technologies!</p>
          </div>
          <div class="col-sm">
            <button class="btn Get-Started btn-default3 btn-outline-success my-2 my-sm-0 color-me-btn mr-5" type="submit">Get Started!</button>
           
          </div>
  
        </div>
        </div>
      </div>
      );
}
 
export default Content;