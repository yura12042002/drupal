import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BasicInformation from "./components/BasicInformation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Keys from "./components/Keys";
import Partner from "./components/Partner";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";
import Service from "./components/Service";
import Support from "./components/Support";
import Team from "./components/Team";
import "./style.css";
import Advertising from "./page/Advertising";
import Promotion from "./page/Promotion";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="appClass">
                <video autoPlay muted loop className="video-background">
                  <source src="/img/video.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
                <Header />
                <BasicInformation />
              </div>
              <div id="service">
                <Service />
              </div>
              <div id="support">
                <Support />
              </div>
              <div id="plans">
                <Plans />
              </div>
              <div id="team">
                <Team />
              </div>
              <div id="keys">
                <Keys />
              </div>
              <div id="reviews">
                <Reviews />
              </div>
              <div id="partner">
                <Partner />
              </div>
              <div id="footer">
                <Footer />
              </div>
            </div>
          }
        />
         <Route path="/advertising" element={<Advertising />}/>
         <Route path="/promotion" element={<Promotion />}/>
         <Route path="*" element={<Navigate to='/' replace={true} />} />
      </Routes>
    </Router>
  );
}

export default App;

// import BasicInformation from "./components/BasicInformation";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Keys from "./components/Keys";
// import Partner from "./components/Partner";
// import Plans from "./components/Plans";
// import Reviews from "./components/Reviews";
// import Service from "./components/Service";
// import Support from "./components/Support";
// import Team from "./components/Team";
// import "./style.css";

// function App() {
//   return (
//     <div>
//       <div className="appClass">
//         <video autoPlay muted loop className="video-background">
//           <source src="/img/video.mp4" type="video/mp4" />
//         </video>
//         <div className="video-overlay"></div>
//         <Header />
//         <BasicInformation />
//       </div>
//       <Service />
//       <Support />
//       <Plans/>
//       <Team/>
//       <Keys/>
//       <Reviews/>
//       <Partner/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
