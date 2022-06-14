import React from 'react';
import './aboutus.css';
import './navbar.css';
import Navbar from './Navbar';
const Aboutus = () => {
    return (  
        <div>
           <Navbar/>
        <div >
        <div className="container py-5 ">
          <div className="row h-100 align-items-center py-5 recorrect">
            <div className="col-lg-6 ">
              <h1 className="aboutcolor">About us page</h1>
              <p className="text mb-0">We are team of software engineers looking to win the world.</p>
              <p className="text">Our Company <a href="https://github.com/yahmandev" className="text-muted"> 
                          <u>Github Link</u></a>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block "><img src="./images/yahyapicaboutus.jpeg" alt="" className="img-fluid cont cornn"/></div>
          </div>
        </div>
      </div>
      
      <div className=" py-5">
        <div className="container py-5 aboutcolor recorrect">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light aboutcolor">Our Company Initiative</h2>
              <p className="font-italic mb-4 text">I as a software engineer started thinking of my own company back in 2020 and with help of outsource clients we are today alive as a startup in 2022</p>
              <button className="btn Get-Started btn-default3 btn-outline-success my-2 my-sm-0 color-me-btn mr-5" type="submit">Learn More</button>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="./images/yahyacomp.png" alt="" className="img-fluid mb-4 mb-lg-0 cont"/></div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto"><img src="./images/company.jpg" alt="" className="img-fluid mb-4 mb-lg-0 cont"/></div>
            <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light aboutcolor">Why Choose Us!</h2>
              <p className="font-italic mb-4 text">Whether you are looking to hire dedicated and like-minded individuals or just want to learn more about Nextbridge, we are connecting you with a member of the Business Development Team. This person can help you with any inquiries you may have.</p>
              <button className="btn Get-Started btn-default3 btn-outline-success my-2 my-sm-0 color-me-btn mr-5" type="submit">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className=" py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5 aboutcolor recorrect">
              <h2 className="display-4 font-weight-light aboutcolor">Our team</h2>
              <p className="font-italic text">We are the building blocks of yahya logics.</p>
            </div>
          </div>
      
          <div className="row text-center d-flex justify-content-center">
           
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4"><img src="./images/yahyapicaboutus.jpeg" alt="" className="img-fluid cont cornerss"/>
                <h5 className="mb-0">FURQAN RASOOL YAHYA</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
                <br/>
            
              </div>
              
            </div>
       
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4"><img src="./images/hasnain.jpeg" alt="" className="img-fluid cont corners"/>
                <h5 className="mb-0">Hasnain Allah Rakha</h5><span className="small text-uppercase text-muted">Chief Head Web Development</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
      
          </div>
        </div>
      </div>
      
      
     </div>

    );
}
 
export default Aboutus;