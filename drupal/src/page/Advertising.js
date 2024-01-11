import React from "react";
import Header from "../components/Header";
import BasicInformation from '../components/BasicInformation'
import Footer from '../components/Footer'

function Advertising() {
  return (
    <div>
      <div className="appClass">
        <video autoPlay muted loop className="video-background">
          <source src="/img/video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <Header />
        <BasicInformation/>
        <Footer/>
      </div>
    </div>
  );
}

export default Advertising;
