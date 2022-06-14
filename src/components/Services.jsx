import React from 'react';
import './aboutus.css';
import './navbar.css';
import Navbar from './Navbar';
const Services = () => {
    return (  
        <div>
            <Navbar/>
      
      
        <div class=" py-5">
        
        <div class="container py-5 aboutcolor  ">
          <div class="row align-items-center mb-5 recorrect">
            <div class="col-lg-6 order-2 order-lg-1 "><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light aboutcolor">Video Call Services</h2>
              <p class="font-italic mb-4 text">Video calling is just like a regular phone call, except you can see the person you’re calling and they can see you. This makes each call very special because you never have to miss a big moment again. You can see a grandchild’s first steps, a sibling that may live far away, or anything else that you don’t want to miss. It’ll feel like you’re right there with them!</p>
              <p class="font-italic mb-4 text">While it’s always best to see things in person, video calling is the next best thing. The best part is that it’s easy to do with your phone and you can make video calls wherever you have internet access.</p>
              <button class="btn Get-Started btn-default3 btn-outline-success my-2 my-sm-0 color-me-btn mr-5" type="submit">Learn More</button>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="images/Video Call.jpg" alt="" class="img-fluid mb-4 mb-lg-0 cont"/></div>
          </div>
          <div class="row align-items-center recorrect">
            <div class="col-lg-5 px-5 mx-auto"><img src="images/videochat2.jpg" alt="" class="img-fluid mb-4 mb-lg-0 cont"/></div>
            <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light aboutcolor">Let’s Video Chat!</h2>
              <p class="font-italic mb-4 text">Now that you know what video chatting is and what app you can use, it’s time to start video chatting. No matter how far away you live from loved ones, video calling will let you stay in contact with your family and see them face-to-face. If you have any questions, don’t hesitate to ask them in the comment section below.</p>
              <button class="btn Get-Started btn-default3 btn-outline-success my-2 my-sm-0 color-me-btn mr-5" type="submit">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      
      
      </div>
     
    );
}
 
export default Services;