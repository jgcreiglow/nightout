/*dependencies*/
import React, { Component } from "react";
import "./landing.css";
import "./landingvideo.mp4";


class landing extends Component {
    render() {
        return (
            <div>
            <video autoPlay muted loop id="myVideo">
                    <source src='http://www.coverr.co/s3/mp4/Ultra_Sunset.mp4'
                    type="video/mp4" />
               

      Your browser does not support the video tag.
  </video>
          

          <div class="content center-align">
            <h1 className="logo">Let's Go Out</h1>
                    <p className="tagline">planning a perfect night has never been so easy</p>

                    <a href="/home">
                        <button>
                            <h6 className="login-btn">
                                Log In
                            </h6>
                        </button>
                    </a>      
    
 
                </div>
          </div>      
    )
}
}











/* **THIS IS THE LAST LINE OF CODE** */ 
export default landing;
