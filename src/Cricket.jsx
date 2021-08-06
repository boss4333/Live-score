import React from 'react';
import Cric from './img/cricket.png';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import './components/Navbar.css';
const  Cricket=()=>{
    return(<>
    <section id="header" className="d-flex align-items-center">
           <div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-10 mx-auto">
      <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1
                 d-flex justify-contents-center flex-column">
               <h1>Wanna See Currently Ongoing And Upcoming Cricket Match Score Of All Format
                        <strong className="match-name"> T20  Odi  Test</strong></h1>

                      <div className="mt-3">
                           <NavLink  to="/twenty" className="btn-get-started">
                               Get Started
                           </NavLink> 
                      </div>
            </div>   
            <div className="col-lg-6 order-1 order-lg-2 match-image ">
              <img src={Cric} className="img-fluid animated" alt="home-image"/>
            </div>  
            </div>          
      </div>
      </div>
      </div>
      </section>
    </>)
};
export default  Cricket;